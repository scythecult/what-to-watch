import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DEFAULT_FILTER, StoreName } from '../const';
import { filterSelector } from '../filter-slice/selectors';

export type FilmsSliceState = Pick<RootState, typeof StoreName.Films>;

export const filmsSelector = createSelector(
  [(state: FilmsSliceState) => state[StoreName.Films], filterSelector],
  ({ films }, currentFilter) =>
    currentFilter === DEFAULT_FILTER || currentFilter === ''
      ? films
      : films.filter((film) => film.genre === currentFilter)
);

export const promoFilmSelector = createSelector(
  [(state: FilmsSliceState) => state[StoreName.Films]],
  ({ promoFilm }) => promoFilm
);

export const filmDetailsSelector = createSelector(
  [(state: FilmsSliceState) => state[StoreName.Films]],
  ({ filmDetails }) => filmDetails
);

export const similarFilmsSelector = createSelector(
  [(state: FilmsSliceState) => state[StoreName.Films]],
  ({ similarFilms }) => similarFilms
);

export const filmCommentsSelector = createSelector(
  [(state: FilmsSliceState) => state[StoreName.Films]],
  ({ filmComments }) => filmComments
);
