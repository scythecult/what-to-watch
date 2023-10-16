import { Link } from 'react-router-dom';
import { TFilm } from '../../types';
import { AppRoute } from '../../const';
import { useState } from 'react';

type TFilmCardProps = TFilm;

const FilmCard = (film: TFilmCardProps) => {
  const [isVideoPreview, setIsVideoPreview] = useState<boolean>(false);
  const { id, name, previewImage, previewVideoLink } = film;

  const handleMouse = () =>
    setIsVideoPreview((prevVideoPreview) => !prevVideoPreview);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <div className="small-film-card__image">
        {isVideoPreview ? (
          <video
            src={previewVideoLink}
            playsInline
            autoPlay
            muted
            width="280"
            height="175"
          />
        ) : (
          <img src={previewImage} alt={name} width="280" height="175" />
        )}
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
