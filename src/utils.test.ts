import {
  formatDate,
  formatTime,
  generateRatingValues,
  getFormattedPlayTime,
  getGenres,
  getRating,
  isEmailValid,
  isPasswordValid,
  makeUcFirst,
} from './utils';
import { GENRES, createFilms } from './utils/mocks';

// ARRANGE - ПОДГОТОВКА
// ACT - ДЕЙСТВИЕ
// ASSERT - ПРОВЕРКА

describe('Util functions', () => {
  describe('makeUcFirst', () => {
    // ARRANGE
    const USER_INPUT = 'check';
    const EXPECTED = 'Check';

    it('Should return word with first letter uppercased', () => {
      // ACT
      const result = makeUcFirst(USER_INPUT);

      // ASSERT
      expect(result).toBe(EXPECTED);
    });
  });

  describe('getGenres', () => {
    const EXPECTED_VALUES = ['All Genres', ...GENRES];
    const films = createFilms();

    it('Should return an array of genres', () => {
      const result = getGenres(films);

      expect(result).toEqual(EXPECTED_VALUES);
    });
  });

  describe('generateRatingValues', () => {
    const EXPECTED_VALUES = [3, 2, 1];

    it('Should return an array of nubmers of given count', () => {
      const result = generateRatingValues(3);

      expect(result).toEqual(EXPECTED_VALUES);
    });
  });

  describe('getFormattedPlayTime', () => {
    const EXPECTED_VALUE = '2 :  4';

    it('Should return formatted time', () => {
      const result = getFormattedPlayTime(124);

      expect(result).toBe(EXPECTED_VALUE);
    });
  });

  describe('isEmailValid', () => {
    it('Should check is entered email format is correct', () => {
      const USER_INPUT = 'example@gmail.com';

      const result = isEmailValid(USER_INPUT);

      expect(result).toBeTruthy();
    });

    it('Should check is entered email format is incorrect', () => {
      const USER_INPUT = 'not2@gmail';

      const result = isEmailValid(USER_INPUT);

      expect(result).toBeFalsy();
    });
  });

  describe('isPasswordValid', () => {
    it('Should check is entered password format is correct', () => {
      const USER_INPUT = '12check3';

      const result = isPasswordValid(USER_INPUT);

      expect(result).toBeTruthy();
    });

    it('Should check is entered password format is incorrect', () => {
      const USER_INPUT = 'cd';

      const result = isPasswordValid(USER_INPUT);

      expect(result).toBeFalsy();
    });
  });

  describe('getRating', () => {
    it('Should return proper rating word', () => {
      const EXPECTED_VALUE = 'Good';

      const result = getRating(4);

      expect(result).toBe(EXPECTED_VALUE);
    });
  });

  describe('formatTime', () => {
    it('Should return formatted time value', () => {
      const EXPECTED_VALUE = '1h 39m';

      const result = formatTime(99);

      expect(result).toBe(EXPECTED_VALUE);
    });
  });

  describe('formatDate', () => {
    it('Should return formatted date-time value', () => {
      const EXPECTED_VALUE = 'May 25, 2023';

      const result = formatDate('2023-05-25T12:00:00.000Z');

      expect(result).toBe(EXPECTED_VALUE);
    });
  });
});
