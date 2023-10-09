import { TFilmDetails } from '../types';

const mockDetails: TFilmDetails = {
  id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
  name: 'The Grand Budapest Hotel',
  posterImage:
    'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg',
  backgroundImage:
    'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://url-to-video/video.jpg',
  description:
    'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: ['Bill Murray'],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};

export { mockDetails };
