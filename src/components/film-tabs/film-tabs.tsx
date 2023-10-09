import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const FilmTabs = () => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      <li className="film-nav__item film-nav__item--active">
        <Link className="film-nav__link" to={AppRoute.FilmOverview}>
          Overview
        </Link>
      </li>
      <li className="film-nav__item">
        <Link className="film-nav__link" to={AppRoute.FilmDetails}>
          Details
        </Link>
      </li>
      <li className="film-nav__item">
        <Link className="film-nav__link" to={AppRoute.FilmReviews}>
          Reviews
        </Link>
      </li>
    </ul>
  </nav>
);

export { FilmTabs };
