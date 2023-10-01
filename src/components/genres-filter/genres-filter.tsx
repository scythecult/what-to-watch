import { mockFilms } from '../../mocks/films';
import { getGenres } from '../../utils';

// catalog__genres-item--active
const GenresFilter = () => {
  const genres = getGenres(mockFilms);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className="catalog__genres-item" key={genre}>
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { GenresFilter };
