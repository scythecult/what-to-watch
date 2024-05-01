import { TFilm } from './types';

export const makeUcFirst = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

export const getGenres = (films: TFilm[]) =>
  Object.keys(
    films.reduce((initial, film) => ({ ...initial, [film.genre]: '' }), {
      'All Genres': '',
    })
  );

export const generateRatingValues = (count: number) =>
  Array.from({ length: count })
    .fill('')
    .map((_, index) => index + 1)
    .reverse();

export const getFormattedPlayTime = (time: number) =>
  `${Math.floor(time / 60)} :  ${time % 60}`;
