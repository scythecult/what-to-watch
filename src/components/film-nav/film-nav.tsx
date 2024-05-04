import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type TFilmNavProps = {
  filmId: string | undefined;
};

const FilmNav = ({ filmId = '' }: TFilmNavProps) => {
  const authStatus = AuthStatus.Auth;
  const shouldRender = authStatus === AuthStatus.Auth;

  return (
    <div className="film-card__buttons">
      <Link
        className="btn btn--play film-card__button"
        to={`${AppRoute.VideoPlayer}/${filmId}`}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      {shouldRender && (
        <Link
          className="btn film-card__button"
          to={`${AppRoute.Film}/${filmId}${AppRoute.Review}`}
        >
          Add review
        </Link>
      )}
    </div>
  );
};

export { FilmNav };
