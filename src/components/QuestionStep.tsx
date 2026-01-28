import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { OptionCard } from './OptionCard';
import { ProgressBar } from './ProgressBar';
import { useLanguage } from '../i18n/LanguageContext';
import type { ReactNode } from 'react';

interface Option {
  value: string;
  icon: ReactNode;
  titleKey: string;
  descKey: string;
}

interface QuestionStepProps {
  questionNumber: number;
  totalQuestions: number;
  titleKey: string;
  descKey: string;
  options: Option[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export function QuestionStep({
  questionNumber,
  totalQuestions,
  titleKey,
  descKey,
  options,
  selectedValue,
  onSelect,
  onBack,
  onNext,
  isLastQuestion,
}: QuestionStepProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress */}
      <div className="mb-8">
        <p className="text-sm font-medium text-primary-600 mb-3">
          {t('questionOf', { current: questionNumber, total: totalQuestions })}
        </p>
        <ProgressBar currentStep={questionNumber} totalSteps={totalQuestions} />
      </div>

      {/* Question */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
          {t(titleKey as any)}
        </h2>
        <p className="text-slate-600">{t(descKey as any)}</p>
      </motion.div>

      {/* Options */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-3 mb-8"
      >
        {options.map((option, index) => (
          <motion.div
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <OptionCard
              icon={option.icon}
              title={t(option.titleKey as any)}
              description={t(option.descKey as any)}
              isSelected={selectedValue === option.value}
              onClick={() => onSelect(option.value)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-between gap-4"
      >
        <button onClick={onBack} className="btn-secondary flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          {t('back')}
        </button>

        <button
          onClick={onNext}
          disabled={!selectedValue}
          className={`btn-primary flex items-center gap-2 ${
            !selectedValue ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLastQuestion ? t('seeResults') : t('next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}
