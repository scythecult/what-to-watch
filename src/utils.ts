import { RatingMap } from './const';
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

export const isEmailValid = (email: string) => {
  const EMAIL_REGEX =
    /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)+([a-z]{2,18})$/;

  return EMAIL_REGEX.test(email);
};

export const isPasswordValid = (password: string) => {
  const PASSWORD_REGEX = /[\D{1}\d{1}]/g;

  return PASSWORD_REGEX.test(password) && password.length > 2;
};

export const getRating = (rating: number) => {
  let ratingWord = '';
  const flooredRating = Math.floor(rating);

  for (const [key, value] of RatingMap.entries()) {
    if (
      flooredRating >= Math.min(...key) &&
      flooredRating <= Math.max(...key)
    ) {
      ratingWord = value;
    }
  }

  return ratingWord;
};
