import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DEFAULT_FILTER, StoreName, StoreNameValue } from '../const';
import { filterSelector } from '../filter-slice/selectors';

export const filmsSelector = createSelector(
  [
    (state: Pick<RootState, StoreNameValue>) => state[StoreName.Films],
    filterSelector,
  ],
  ({ films }, currentFilter) =>
    currentFilter === DEFAULT_FILTER || currentFilter === ''
      ? films
      : films.filter((film) => film.genre === currentFilter)
);

export const promoFilmSelector = createSelector(
  [(state: Pick<RootState, StoreNameValue>) => state[StoreName.Films]],
  ({ promoFilm }) => promoFilm
);
