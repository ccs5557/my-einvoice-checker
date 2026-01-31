import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FileCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide header when scrolling down, show when scrolling up
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: hidden ? -100 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="max-w-2xl mx-auto">
        <div className="glass-card rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25">
              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-slate-800 text-sm leading-tight">
                {t('title')}
              </h1>
              <p className="text-xs text-slate-500">{t('subtitle')}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-0.5 px-1 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <span className={`px-2 py-0.5 rounded-md text-sm font-medium transition-colors ${language === 'zh' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-400'}`}>
                中
              </span>
              <span className={`px-2 py-0.5 rounded-md text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-400'}`}>
                EN
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
