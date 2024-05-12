import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TFilmDetails } from '../../types';
import { useEffect, useRef, useState } from 'react';
import { useLoadedData } from '../../hooks/use-loaded-data';
import { usePlayer } from '../../hooks/use-player';
import { getFormattedPlayTime } from '../../utils';

type TPlayerProps = {
  film: TFilmDetails;
};

const renderIcon = (isPlaying: boolean) => {
  if (isPlaying) {
    return (
      <>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </>
    );
  }

  return (
    <>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </>
  );
};

const Player = ({ film }: TPlayerProps) => {
  const { name, runTime, videoLink, posterImage } = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded] = useLoadedData(videoRef);
  const [togglePlayingState, setTogglePlayingState] = usePlayer({
    elementRef: videoRef,
    isLoaded,
  });
  const [progress, setProgress] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const handleVideoClick = () => {
    setTogglePlayingState();
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    let intervalId: ReturnType<typeof setInterval>;

    if (!videoElement || !isLoaded) {
      return;
    }

    if (togglePlayingState) {
      intervalId = setInterval(() => {
        const currentProgress =
          (videoElement.currentTime * 100) / videoElement.duration;
        const currentElapsedTime = Math.floor(
          videoElement.duration - videoElement.currentTime
        );

        setProgress(currentProgress);
        setElapsedTime(currentElapsedTime);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={posterImage}
        playsInline
        muted
        ref={videoRef}
      />

      <Link className="player__exit" to={AppRoute.Root}>
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" style={{ left: `${progress}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {elapsedTime} / {getFormattedPlayTime(runTime)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handleVideoClick}
            disabled={!isLoaded}
          >
            {renderIcon(togglePlayingState)}
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Player };
