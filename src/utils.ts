import { TFilm } from './types';

const makeUcFirst = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const getGenres = (films: TFilm[]) =>
  Object.keys(
    films.reduce(
      (initial, mockFilm) => ({ ...initial, [mockFilm.genre]: '' }),
      { 'All Genres': '' }
    )
  );

const generateRatingValues = (count: number) =>
  Array.from({ length: count })
    .fill('')
    .map((_, index) => index + 1)
    .reverse();

export { generateRatingValues, getGenres, makeUcFirst };
