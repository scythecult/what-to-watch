import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-store';
import { userAuthStatusSelector } from '../../store/user-slice/selectors';

type TFilmNavProps = {
  filmId: string | undefined;
};

const FilmNav = ({ filmId = '' }: TFilmNavProps) => {
  const authStatus = useAppSelector(userAuthStatusSelector);
  const navigate = useNavigate();
  const shouldRenderUserInfo = authStatus === AuthStatus.Auth;

  const handleMyListButtonClick = () => {
    if (shouldRenderUserInfo) {
      //
    }

    navigate(AppRoute.Login);
  };

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
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={handleMyListButtonClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        {shouldRenderUserInfo && <span className="film-card__count">9</span>}
      </button>
      {shouldRenderUserInfo && (
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
