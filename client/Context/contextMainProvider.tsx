import React, { useContext, useState, useEffect } from 'react';
import ContextMain from './contextMain';

export function Provider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleReSize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleReSize);
    return () => {
      window.removeEventListener('resize', handleReSize);
    };
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    isMobile,
  };

  return (
    <ContextMain.Provider value={contextValue}>{children}</ContextMain.Provider>
  );
}

export const useMainProvider = () => {
  useContext(ContextMain);
};
