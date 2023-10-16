import { Link, useParams } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

const FilmNav = () => {
  const { id } = useParams();
  const authStatus = AuthStatus.Auth;
  const shouldRenderReview = authStatus === AuthStatus.Auth && id;

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      {shouldRenderReview && (
        <Link
          className="btn film-card__button"
          to={`${AppRoute.Film}/${id}${AppRoute.Review}`}
        >
          Add review
        </Link>
      )}
    </div>
  );
};

export { FilmNav };
