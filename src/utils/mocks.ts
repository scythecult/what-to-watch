import { internet, name, system } from 'faker';
import { TFilm } from '../types';

// id(pin):"47bba0c8-754a-4a4a-89d0-b6840199d02a"
// name(pin):"Fantastic Beasts: The Crimes of Grindelwald"
// previewImage(pin):"https://13.design.htmlacademy.pro/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg"
// previewVideoLink(pin):"https://13.design.htmlacademy.pro/static//film/video/traffic.mp4"
// genre(pin):"Fantasy"

export const GENRES = ['Funk', 'Country', 'Blues'];
export const createFilms = (): TFilm[] =>
  new Array(3).fill(null).map((_, index) => ({
    id: name.firstName(),
    name: internet.userName(),
    previewImage: system.filePath(),
    previewVideoLink: internet.url(),
    genre: GENRES[index],
  }));
