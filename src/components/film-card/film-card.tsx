import { Link } from 'react-router-dom';
import { TFilm } from '../../types';
import { AppRoute } from '../../const';

type TFilmCardProps = TFilm;

const FilmCard = (film: TFilmCardProps) => {
  const { id, name, previewImage } = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
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
