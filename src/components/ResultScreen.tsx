import { motion } from 'framer-motion';
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import { RiskMeter } from './RiskMeter';
import type { ComplianceResult } from '../types/quiz';
import { getRiskColor } from '../utils/complianceLogic';
import { useLanguage } from '../i18n/LanguageContext';

interface ResultScreenProps {
  result: ComplianceResult;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { t, language } = useLanguage();
  const colors = getRiskColor(result.riskLevel);

  const getRiskIcon = () => {
    switch (result.riskLevel) {
      case 'low':
        return <CheckCircle className="w-8 h-8" />;
      case 'medium':
        return <AlertTriangle className="w-8 h-8" />;
      case 'high':
        return <XCircle className="w-8 h-8" />;
    }
  };

  const getRiskLabel = () => {
    switch (result.riskLevel) {
      case 'low':
        return t('lowRisk');
      case 'medium':
        return t('mediumRisk');
      case 'high':
        return t('highRisk');
    }
  };

  const getRiskDescription = () => {
    switch (result.riskLevel) {
      case 'low':
        return t('lowRiskDesc');
      case 'medium':
        return t('mediumRiskDesc');
      case 'high':
        return t('highRiskDesc');
    }
  };

  // WhatsApp message
  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? "Hi! I saw your e-Invoice checker demo and I'm interested in a custom lead magnet for my business."
      : "您好！我看了您的电子发票检查器演示，对定制营销工具很感兴趣。"
  );
  const whatsappLink = `https://wa.me/60165415123?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Result Header */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
          {t('resultsTitle')}
        </h2>
      </motion.div>

      {/* Risk Level Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`${colors.bg} rounded-2xl p-6 mb-6 border border-${result.riskLevel === 'low' ? 'emerald' : result.riskLevel === 'medium' ? 'amber' : 'red'}-200`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`${colors.text}`}>{getRiskIcon()}</div>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('riskLevel')}</p>
            <h3 className={`font-display text-2xl font-bold ${colors.text}`}>
              {getRiskLabel()}
            </h3>
          </div>
        </div>
        <RiskMeter riskLevel={result.riskLevel} riskScore={result.riskScore} />
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-6 mb-6"
      >
        <p className="text-slate-700 leading-relaxed">{getRiskDescription()}</p>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-2xl p-6 mb-8"
      >
        <h4 className="font-semibold text-slate-800 mb-4">
          {t('recommendationsTitle')}
        </h4>
        <ul className="space-y-3">
          {result.recommendations.map((recKey, index) => (
            <motion.li
              key={recKey}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                {index + 1}
              </div>
              <span className="text-slate-700">{t(recKey as any)}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white mb-6"
      >
        <h4 className="font-display text-xl font-bold mb-2">{t('ctaTitle')}</h4>
        <p className="text-primary-100 text-sm mb-5 leading-relaxed">
          {t('ctaDesc')}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-4 sm:px-6 py-3 rounded-xl shadow-lg hover:bg-primary-50 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm sm:text-base whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span>{t('ctaButton')}</span>
        </a>
        <p className="text-primary-200 text-xs mt-4">
          {t('ctaCredit')}: <span className="font-semibold">CCS</span>
        </p>
      </motion.div>

      {/* Restart & Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors cursor-pointer mb-4"
        >
          <RotateCcw className="w-4 h-4" />
          {t('restartQuiz')}
        </button>
        <p className="text-xs text-slate-400 leading-relaxed">
          {t('disclaimer')}
        </p>
      </motion.div>
    </motion.div>
  );
}
