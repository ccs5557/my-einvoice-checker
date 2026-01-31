import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, FileCheck, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, label: t('lhdnRules') },
    { icon: Clock, label: t('freeNote').split('•')[1]?.trim() || '30 seconds' },
    { icon: FileCheck, label: t('freeNote').split('•')[0]?.trim() || 'Free' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      {/* Hero Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl shadow-primary-500/30"
      >
        <FileCheck className="w-12 h-12 text-white" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
      >
        {t('welcomeTitle')}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-slate-600 text-lg mb-8 max-w-md mx-auto leading-relaxed"
      >
        {t('welcomeDesc')}
      </motion.p>

      {/* Feature Tags */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50"
          >
            <feature.icon className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-slate-700">
              {feature.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
      >
        {t('startButton')}
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-sm text-slate-500"
      >
        {t('freeNote')}
      </motion.p>

      {/* Version Badge - Trust Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 inline-flex items-start gap-1.5 text-xs text-slate-400"
      >
        <BadgeCheck className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" />
        <span>{t('versionInfo')} • {t('guidelineVersion')}</span>
      </motion.div>
    </motion.div>
  );
}
