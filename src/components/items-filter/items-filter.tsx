import { NavLink } from 'react-router-dom';
import { mockFilms } from '../../mocks/films';
import { getGenres } from '../../utils';
import { AppRoute } from '../../const';
import styles from './items-filter.module.css';

const ItemsFilter = () => {
  const genres = getGenres(mockFilms);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className="catalog__genres-item" key={genre}>
          <NavLink
            to={`${AppRoute.Root}${genre}`}
            className={
              ({ isActive }) =>
                isActive
                  ? `catalog__genres-link ${styles.active}`
                  : 'catalog__genres-link'
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            {genre}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export { ItemsFilter };
