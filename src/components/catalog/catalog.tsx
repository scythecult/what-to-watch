import { ItemsFilter } from '../../components/items-filter/items-filter';
import { FilmList } from '../../components/film-list/film-list';
import { useState } from 'react';
import { TFilm } from '../../types';

const FILMS_PER_PAGE_AMOUNT = 12;

export type TCatalogProps = {
  films: TFilm[];
};

const Catalog = ({ films }: TCatalogProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageFilms = films.slice(
    0,
    Math.min(films.length, currentPage * FILMS_PER_PAGE_AMOUNT)
  );
  const shouldRenderShowMoreButton = currentPageFilms.length < films.length;

  const handleShowMoreButtonClick = () => {
    setCurrentPage((prevCurrentPage) => (prevCurrentPage += 1));
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ItemsFilter />

      <FilmList films={currentPageFilms} />

      <div className="catalog__more">
        {shouldRenderShowMoreButton && (
          <button
            className="catalog__button"
            type="button"
            onClick={handleShowMoreButtonClick}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export { Catalog };
