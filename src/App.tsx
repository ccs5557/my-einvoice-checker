import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Quiz } from './components/Quiz';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        <Quiz />
      </div>
    </LanguageProvider>
  );
}

export default App;
