import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BarbersPage from './pages/BarbersPage';
import LocationPage from './pages/LocationPage';
import StickyBooking from './components/StickyBooking';
import IntroAnimation from './components/IntroAnimation';
import { useIntroAnimation } from './hooks/useIntroAnimation';

type Page = 'home' | 'services' | 'barbers' | 'location';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { shouldShowIntro, handleIntroComplete } = useIntroAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage />;
      case 'barbers':
        return <BarbersPage />;
      case 'location':
        return <LocationPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {shouldShowIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className="min-h-screen bg-black text-gray-100">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
        <StickyBooking />
      </div>
    </>
  );
}

export default App;
