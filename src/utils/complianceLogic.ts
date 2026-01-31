import type { QuizAnswers, ComplianceResult, RiskLevel } from '../types/quiz';

/**
 * Calculate compliance risk based on 2026 LHDN e-Invoicing rules
 *
 * Key factors:
 * - Turnover < RM 1M: May qualify for exemption/deferment
 * - Entity type: Sdn Bhd has stricter requirements
 * - Current invoicing method: Manual/none indicates higher transition risk
 */
export function calculateComplianceRisk(answers: QuizAnswers): ComplianceResult {
  let riskScore = 0;

  // Turnover scoring (most significant factor)
  switch (answers.turnover) {
    case 'below150k':
      riskScore += 10; // Likely exempt
      break;
    case '150kTo1m':
      riskScore += 40; // Possible deferment
      break;
    case 'above1m':
      riskScore += 80; // Mandatory compliance
      break;
  }

  // Entity type scoring
  switch (answers.entityType) {
    case 'freelancer':
      riskScore += 5; // Generally lower scrutiny
      break;
    case 'soleProprietor':
      riskScore += 10; // Moderate
      break;
    case 'enterprise':
      riskScore += 15; // Enterprise - common business structure
      break;
    case 'sdnBhd':
      riskScore += 20; // Higher compliance expectations
      break;
  }

  // Invoicing method scoring (readiness factor)
  switch (answers.invoicingMethod) {
    case 'basicSoftware':
      riskScore += 0; // Already has system in place
      break;
    case 'manual':
      riskScore += 10; // Needs transition
      break;
    case 'none':
      riskScore += 15; // Significant changes needed
      break;
  }

  // Normalize score to 0-100
  riskScore = Math.min(100, riskScore);

  // Determine risk level
  let riskLevel: RiskLevel;
  if (riskScore <= 35) {
    riskLevel = 'low';
  } else if (riskScore <= 65) {
    riskLevel = 'medium';
  } else {
    riskLevel = 'high';
  }

  // Generate recommendation keys based on risk level
  const recommendations = getRecommendationKeys(riskLevel);

  return {
    riskLevel,
    riskScore,
    recommendations,
  };
}

function getRecommendationKeys(riskLevel: RiskLevel): string[] {
  switch (riskLevel) {
    case 'low':
      return ['rec1Low', 'rec2Low', 'rec3Low'];
    case 'medium':
      return ['rec1Med', 'rec2Med', 'rec3Med', 'rec4Med'];
    case 'high':
      return ['rec1High', 'rec2High', 'rec3High', 'rec4High', 'rec5High'];
  }
}

export function getRiskColor(riskLevel: RiskLevel): {
  bg: string;
  text: string;
  gradient: string;
  meterColors: string[];
} {
  switch (riskLevel) {
    case 'low':
      // Not Required (For Now) - Green, relaxed
      return {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        gradient: 'from-emerald-400 to-emerald-600',
        meterColors: ['bg-emerald-500', 'bg-gray-200', 'bg-gray-200'],
      };
    case 'medium':
      // Prepare Now - Amber, attention
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        gradient: 'from-amber-400 to-orange-500',
        meterColors: ['bg-amber-500', 'bg-amber-500', 'bg-gray-200'],
      };
    case 'high':
      // Action Required - Orange, urgent but not scary
      return {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        gradient: 'from-orange-500 to-red-500',
        meterColors: ['bg-orange-500', 'bg-orange-500', 'bg-orange-500'],
      };
  }
}
