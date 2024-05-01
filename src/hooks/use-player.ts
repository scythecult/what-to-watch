import { MutableRefObject, useEffect, useState } from 'react';

type TUsePlayerProps = {
  elementRef: MutableRefObject<HTMLMediaElement | null>;
  isLoaded: boolean;
};

const usePlayer = ({ elementRef, isLoaded }: TUsePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const handler = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    const videoElement = elementRef.current;

    if (!videoElement || !isLoaded) {
      return;
    }

    if (isPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isPlaying, isLoaded, elementRef]);

  return [isPlaying, handler] as const;
};

export { usePlayer };
