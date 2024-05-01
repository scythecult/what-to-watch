import { Link } from 'react-router-dom';
import { TFilm } from '../../types';
import { AppRoute } from '../../const';
import { useRef, useState } from 'react';
import { Spinner } from '../spinner/spinner';
import styles from './film-card.module.css';

type TFilmCardProps = TFilm;

const FilmCard = (film: TFilmCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);
  const { id, name, previewImage, previewVideoLink } = film;

  const handleImageLoad = () => setIsLoading(false);

  const handlePreviewMouseMove = () => {
    const previewVideoElement = previewVideoRef.current;

    if (isLoading) {
      return;
    }

    if (previewVideoElement) {
      if (!isPlaying) {
        previewVideoElement.play();
        previewVideoElement.hidden = false;
        setIsPlaying(true);
      } else {
        previewVideoElement.hidden = true;
        setIsPlaying(false);
      }
    }
  };

  return (
    <article
      className={`small-film-card catalog__films-card ${styles.filmCard}`}
      onMouseEnter={handlePreviewMouseMove}
      onMouseLeave={handlePreviewMouseMove}
    >
      <div className="small-film-card__image">
        {isLoading && <Spinner />}
        <video
          src={previewVideoLink}
          ref={previewVideoRef}
          poster={previewImage}
          muted
          width="280"
          height="175"
        />
        <img
          onLoad={handleImageLoad}
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Film}/${id}/${AppRoute.FilmOverview}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

export { FilmCard };
