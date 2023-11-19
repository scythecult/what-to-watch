import { useEffect, useState, MutableRefObject } from 'react';

const useLoadedData = (
  elementRef: MutableRefObject<HTMLMediaElement | null>
) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const videoElement = elementRef.current;

    if (!videoElement) {
      return;
    }

    videoElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      videoElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, [elementRef]);

  return [isLoaded];
};

export { useLoadedData };
