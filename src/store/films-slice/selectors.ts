import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DEFAULT_FILTER, StoreName } from '../const';
import { filterSelector } from '../filter-slice/selectors';

export const filmsSelector = createSelector(
  [
    (state: Pick<RootState, typeof StoreName.Films>) => state[StoreName.Films],
    filterSelector,
  ],
  ({ films }, currentFilter) =>
    currentFilter === DEFAULT_FILTER || currentFilter === ''
      ? films
      : films.filter((film) => film.genre === currentFilter)
);

export const promoFilmSelector = createSelector(
  [(state: Pick<RootState, typeof StoreName.Films>) => state[StoreName.Films]],
  ({ promoFilm }) => promoFilm
);

export const filmDetailsSelector = createSelector(
  [(state: Pick<RootState, typeof StoreName.Films>) => state[StoreName.Films]],
  ({ filmDetails }) => filmDetails
);
