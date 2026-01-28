import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Building2,
  Building,
  User,
  Users,
  FileText,
  Calculator,
  FileX,
} from 'lucide-react';
import { StartScreen } from './StartScreen';
import { QuestionStep } from './QuestionStep';
import { ResultScreen } from './ResultScreen';
import type {
  QuizState,
  TurnoverCategory,
  EntityType,
  InvoicingMethod,
  ComplianceResult,
} from '../types/quiz';
import { calculateComplianceRisk } from '../utils/complianceLogic';

type Step = 'start' | 'q1' | 'q2' | 'q3' | 'result';

export function Quiz() {
  const [step, setStep] = useState<Step>('start');
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 0,
    answers: {
      turnover: null,
      entityType: null,
      invoicingMethod: null,
    },
    isComplete: false,
  });
  const [result, setResult] = useState<ComplianceResult | null>(null);

  const handleStart = () => setStep('q1');

  const handleSelectTurnover = (value: string) => {
    setQuizState((prev) => ({
      ...prev,
      answers: { ...prev.answers, turnover: value as TurnoverCategory },
    }));
  };

  const handleSelectEntityType = (value: string) => {
    setQuizState((prev) => ({
      ...prev,
      answers: { ...prev.answers, entityType: value as EntityType },
    }));
  };

  const handleSelectInvoicingMethod = (value: string) => {
    setQuizState((prev) => ({
      ...prev,
      answers: { ...prev.answers, invoicingMethod: value as InvoicingMethod },
    }));
  };

  const handleComplete = () => {
    const complianceResult = calculateComplianceRisk(quizState.answers);
    setResult(complianceResult);
    setStep('result');
  };

  const handleRestart = () => {
    setQuizState({
      currentStep: 0,
      answers: { turnover: null, entityType: null, invoicingMethod: null },
      isComplete: false,
    });
    setResult(null);
    setStep('start');
  };

  // Question configurations
  const q1Options = [
    {
      value: 'below150k',
      icon: <DollarSign className="w-6 h-6" />,
      titleKey: 'q1Opt1',
      descKey: 'q1Opt1Desc',
    },
    {
      value: '150kTo1m',
      icon: <TrendingUp className="w-6 h-6" />,
      titleKey: 'q1Opt2',
      descKey: 'q1Opt2Desc',
    },
    {
      value: 'above1m',
      icon: <Building2 className="w-6 h-6" />,
      titleKey: 'q1Opt3',
      descKey: 'q1Opt3Desc',
    },
  ];

  const q2Options = [
    {
      value: 'soleProprietor',
      icon: <User className="w-6 h-6" />,
      titleKey: 'q2Opt1',
      descKey: 'q2Opt1Desc',
    },
    {
      value: 'sdnBhd',
      icon: <Building className="w-6 h-6" />,
      titleKey: 'q2Opt2',
      descKey: 'q2Opt2Desc',
    },
    {
      value: 'freelancer',
      icon: <Users className="w-6 h-6" />,
      titleKey: 'q2Opt3',
      descKey: 'q2Opt3Desc',
    },
  ];

  const q3Options = [
    {
      value: 'manual',
      icon: <FileText className="w-6 h-6" />,
      titleKey: 'q3Opt1',
      descKey: 'q3Opt1Desc',
    },
    {
      value: 'basicSoftware',
      icon: <Calculator className="w-6 h-6" />,
      titleKey: 'q3Opt2',
      descKey: 'q3Opt2Desc',
    },
    {
      value: 'none',
      icon: <FileX className="w-6 h-6" />,
      titleKey: 'q3Opt3',
      descKey: 'q3Opt3Desc',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col">
      <motion.div
        layout
        className="max-w-lg w-full glass-card rounded-3xl p-6 sm:p-8 mx-auto my-auto"
      >
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div key="start">
              <StartScreen onStart={handleStart} />
            </motion.div>
          )}

          {step === 'q1' && (
            <motion.div key="q1">
              <QuestionStep
                questionNumber={1}
                totalQuestions={3}
                titleKey="q1Title"
                descKey="q1Desc"
                options={q1Options}
                selectedValue={quizState.answers.turnover}
                onSelect={handleSelectTurnover}
                onBack={() => setStep('start')}
                onNext={() => setStep('q2')}
                isLastQuestion={false}
              />
            </motion.div>
          )}

          {step === 'q2' && (
            <motion.div key="q2">
              <QuestionStep
                questionNumber={2}
                totalQuestions={3}
                titleKey="q2Title"
                descKey="q2Desc"
                options={q2Options}
                selectedValue={quizState.answers.entityType}
                onSelect={handleSelectEntityType}
                onBack={() => setStep('q1')}
                onNext={() => setStep('q3')}
                isLastQuestion={false}
              />
            </motion.div>
          )}

          {step === 'q3' && (
            <motion.div key="q3">
              <QuestionStep
                questionNumber={3}
                totalQuestions={3}
                titleKey="q3Title"
                descKey="q3Desc"
                options={q3Options}
                selectedValue={quizState.answers.invoicingMethod}
                onSelect={handleSelectInvoicingMethod}
                onBack={() => setStep('q2')}
                onNext={handleComplete}
                isLastQuestion={true}
              />
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div key="result">
              <ResultScreen result={result} onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
