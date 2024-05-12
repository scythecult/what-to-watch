import { Link, useLocation } from 'react-router-dom';
import { FILM_TABS } from '../../const';
import classNames from 'classnames';
import { makeUcFirst } from '../../utils';

const FilmTabs = () => {
  const { pathname } = useLocation();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {FILM_TABS.map((filmTab) => (
          <li
            className={`film-nav__item ${classNames({
              'film-nav__item--active': pathname.includes(filmTab),
            })}`}
            key={filmTab}
          >
            <Link className="film-nav__link" to={filmTab}>
              {makeUcFirst(filmTab)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { FilmTabs };
