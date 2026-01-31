export type TurnoverCategory = 'below150k' | '150kTo1m' | 'above1m';
export type EntityType = 'soleProprietor' | 'enterprise' | 'sdnBhd' | 'freelancer';
export type InvoicingMethod = 'manual' | 'basicSoftware' | 'none';
export type RiskLevel = 'low' | 'medium' | 'high';

export interface QuizAnswers {
  turnover: TurnoverCategory | null;
  entityType: EntityType | null;
  invoicingMethod: InvoicingMethod | null;
}

export interface QuizState {
  currentStep: number;
  answers: QuizAnswers;
  isComplete: boolean;
}

export interface ComplianceResult {
  riskLevel: RiskLevel;
  riskScore: number; // 0-100
  recommendations: string[];
}
