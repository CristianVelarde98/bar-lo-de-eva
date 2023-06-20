import React from 'react';

interface windowHook {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<windowHook>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowSize]); // Empty array ensures that effect is only run on mount
  if (windowSize.width < 500 && windowSize.height < 600) {
    return true;
  }
  return false;
}

export default useWindowSize;
