import { useState, useEffect } from 'react';

const STORAGE_KEY = 'primecutz_intro_session_count';
const SESSION_THRESHOLD = 3;

export function useIntroAnimation() {
  const [shouldShowIntro, setShouldShowIntro] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    const sessionCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

    if (sessionCount === 0 || sessionCount >= SESSION_THRESHOLD) {
      setShouldShowIntro(true);
      localStorage.setItem(STORAGE_KEY, '1');
    } else {
      localStorage.setItem(STORAGE_KEY, String(sessionCount + 1));
      setIsIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };

  return {
    shouldShowIntro: shouldShowIntro && !isIntroComplete,
    handleIntroComplete,
  };
}
