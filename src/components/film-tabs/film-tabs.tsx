import { Link } from 'react-router-dom';
import { FILM_TABS } from '../../const';
import { useState } from 'react';
import classNames from 'classnames';
import { makeUcFirst } from '../../utils';

const FilmTabs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {FILM_TABS.map((filmTab, index) => (
          <li
            className={`film-nav__item ${classNames({
              'film-nav__item--active': activeIndex === index,
            })}`}
            key={filmTab}
            onClick={() => setActiveIndex(index)}
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
