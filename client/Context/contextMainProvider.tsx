import React, { useContext, useState, useEffect } from 'react';
import contextMain from './contextMain';

export function Provider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const changeSize = () => {
      if (window.innerWidth < 640 && window.innerHeight < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    changeSize();
    window.addEventListener('resize', changeSize, { passive: false });
    return () => window.removeEventListener('resize', changeSize);
  }, []);

  const contextValue = {
    isMobile,
  };

  return (
    <contextMain.Provider value={contextValue}>{children}</contextMain.Provider>
  );
}

export const useMainProvider = () => {
  useContext(contextMain);
};
