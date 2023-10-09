import { TPromoFilm } from '../../types';
import { FilmNav } from '../film-nav/film-nav';

type TFilmDescriptionProps = TPromoFilm & { withPoster?: boolean };

const FilmDescription = (filmData: TFilmDescriptionProps) => {
  const { name, genre, released, posterImage, withPoster = false } = filmData;

  return (
    <>
      {withPoster && (
        <div className="film-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      )}
      <div className="film-card__desc">
        <h2 className="film-card__title">{name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{released}</span>
        </p>

        <FilmNav />
      </div>
    </>
  );
};

export { FilmDescription };
