import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

interface OptionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export function OptionCard({
  icon,
  title,
  description,
  isSelected,
  onClick,
}: OptionCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`option-card w-full text-left relative ${isSelected ? 'selected' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
            isSelected
              ? 'bg-primary-500 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            isSelected
              ? 'bg-primary-500 border-primary-500'
              : 'border-slate-300 bg-white'
          }`}
        >
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <Check className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.button>
  );
}
