import { motion } from 'framer-motion';
import type { RiskLevel } from '../types/quiz';
import { getRiskColor } from '../utils/complianceLogic';
import { useLanguage } from '../i18n/LanguageContext';

interface RiskMeterProps {
  riskLevel: RiskLevel;
  riskScore: number;
}

export function RiskMeter({ riskLevel, riskScore }: RiskMeterProps) {
  const colors = getRiskColor(riskLevel);
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Meter Bar */}
      <div className="flex gap-2 mb-4">
        {colors.meterColors.map((color, index) => (
          <motion.div
            key={index}
            className={`flex-1 risk-meter-segment ${color}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
        ))}
      </div>

      {/* Score Indicator */}
      <div className="relative h-2 bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-500 rounded-full mb-2">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-slate-200"
          initial={{ left: '0%' }}
          animate={{ left: `${riskScore}%` }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          style={{ marginLeft: '-8px' }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-slate-500">
        <span>{t('meterLow')}</span>
        <span>{t('meterMid')}</span>
        <span>{t('meterHigh')}</span>
      </div>
    </div>
  );
}
