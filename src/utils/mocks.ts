import { faker } from '@faker-js/faker';
import {
  ErrorInfo,
  TFilm,
  TFilmComment,
  TFilmDetails,
  TPromoFilm,
  UserInfoResponse,
} from '../types';

// id(pin):"47bba0c8-754a-4a4a-89d0-b6840199d02a"
// name(pin):"Fantastic Beasts: The Crimes of Grindelwald"
// previewImage(pin):"https://13.design.htmlacademy.pro/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg"
// previewVideoLink(pin):"https://13.design.htmlacademy.pro/static//film/video/traffic.mp4"
// genre(pin):"Fantasy"

export const GENRES = ['Funk', 'Country', 'Blues'];
export const createFilms = (genreFilter = ''): TFilm[] => {
  let films = new Array(3).fill(null).map((_, index) => ({
    id: faker.person.firstName(),
    name: faker.internet.userName(),
    previewImage: faker.system.filePath(),
    previewVideoLink: faker.internet.url(),
    genre: GENRES[index],
  }));

  if (genreFilter) {
    films = films.filter((film) => film.genre === genreFilter);
  }

  return films;
};

export const createPromoFilm = (): TPromoFilm => ({
  id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
  name: faker.person.firstName(),
  posterImage: faker.system.filePath(),
  backgroundImage: faker.system.filePath(),
  videoLink: faker.system.filePath(),
  genre: faker.music.genre(),
  released: faker.number.int(2024),
  isFavorite: faker.datatype.boolean(),
});

export const createFilmDetails = (): TFilmDetails => ({
  id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
  name: faker.person.firstName(),
  posterImage: faker.system.filePath(),
  backgroundImage: faker.system.filePath(),
  backgroundColor: faker.color.human(),
  videoLink: faker.system.filePath(),
  description: faker.lorem.sentences(),
  rating: faker.number.float({ min: 1, max: 10 }),
  scoresCount: faker.number.int(100),
  director: faker.person.fullName(),
  starring: [faker.person.fullName()],
  runTime: faker.number.int(200),
  genre: faker.music.genre(),
  released: faker.number.int(2024),
  isFavorite: faker.datatype.boolean(),
});

export const createFilmComments = (): TFilmComment[] =>
  new Array(5).fill(null).map(() => ({
    id: crypto.randomUUID(),
    date: '2023-05-25T12:00:00.000Z',
    user: faker.person.fullName(),
    comment: faker.lorem.paragraphs(),
    rating: faker.number.float({ min: 1, max: 10 }),
  }));

export const createErrorInfo = (): ErrorInfo => ({
  serverMessage: faker.lorem.paragraph(),
  responseMessage: faker.lorem.paragraph(),
});

export const createUserInfo = (): UserInfoResponse => ({
  name: faker.internet.userName(),
  avatarUrl: faker.system.directoryPath(),
  email: faker.internet.email(),
  token: crypto.randomUUID(),
});
