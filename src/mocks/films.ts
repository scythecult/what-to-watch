import { TFilm } from '../types';

const mockFilms: TFilm[] = [
  {
    id: 'b6a28d76-0355-4fa8-b722-00974ea63c8b',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Fantasy',
  },
  {
    id: 'c4424343-acc4-4ed5-bdf2-55b4197d8664',
    name: 'Bohemian Rhapsody',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/bohemian_rhapsody.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Drama',
  },
  {
    id: '2e599872-470e-4b91-8343-4ce0a76eb9f9',
    name: 'Macbeth',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/macbeth.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Drama',
  },
  {
    id: '99d88a7a-98d9-4698-8f11-0ea048d60ac2',
    name: 'Aviator',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/aviator.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Drama',
  },
  {
    id: '6f9e1854-f648-4297-be79-681d0becdd73',
    name: 'We need to talk about Kevin',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/we-need-to-talk-about-kevin.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Drama',
  },
  {
    id: '6e2cb431-bf85-43e9-903d-71fd8758eec5',
    name: 'What We Do in the Shadows',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/what-we-do-in-the-shadows.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Comedy',
  },
  {
    id: '2c759a3c-f707-4027-aff0-503d2f95f1c9',
    name: 'The Revenant',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/revenant.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Action',
  },
  {
    id: 'a67d11e8-fed7-47c7-8b15-e45dba467bb4',
    name: 'Johnny English',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/johnny-english.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Comedy',
  },
  {
    id: 'a281f2ec-0f36-4286-a9cb-154847aedb66',
    name: 'Shutter Island',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/shutter-island.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Thriller',
  },
  {
    id: '268ab438-2448-421e-a5a9-8b7d934861ed',
    name: 'Pulp Fiction',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/pulp-fiction.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Crime',
  },
  {
    id: '1b726ce3-df0c-426b-831b-3eebe16ca449',
    name: 'No Country for Old Men',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/no-country-for-old-men.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Crime',
  },
  {
    id: '25883521-4fb5-48ae-b8e0-8a1d88343cb6',
    name: 'Snatch',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/snatch.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Comedy',
  },
  {
    id: 'dc152324-7968-4c6c-aaaf-22b06cd7c9b6',
    name: 'Moonrise Kingdom',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/moonrise-kingdom.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Adventure',
  },
  {
    id: '3a48aad8-b314-4688-94fa-d7cd87ed7656',
    name: 'Seven Years in Tibet',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/seven-years-in-tibet.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Adventure',
  },
  {
    id: 'a05a50f2-95af-4f75-89f9-302e9848bf04',
    name: 'Midnight Special',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/midnight-special.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Action',
  },
  {
    id: '0891891f-9d65-4579-9e8e-60c73976ad68',
    name: 'War of the Worlds',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/war-of-the-worlds.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Adventure',
  },
  {
    id: '2096fbf6-ed96-4a96-b084-0fed0ea5429e',
    name: 'Dardjeeling Limited',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/dardjeeling_limited.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Adventure',
  },
  {
    id: 'ba1e3d90-fe35-4c26-bcf0-79258b224bd4',
    name: 'Orlando',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/orlando.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Drama',
  },
  {
    id: 'b5363e30-f379-4023-be45-96d4e4aab840',
    name: 'Legend',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/legend.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Crime',
  },
  {
    id: 'e494cf81-62b0-430d-af0c-fb90c5e586f3',
    name: 'A Star Is Born',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/A_Star_Is_Born.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Drama',
  },
  {
    id: '056ef497-789a-4750-abbb-099dc7272a34',
    name: 'Bronson',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/bronson.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Action',
  },
  {
    id: 'aba3829f-2f8a-4f87-b532-7e90caa2928f',
    name: 'Gangs of new york',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/gangs_of_new_york.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Crime',
  },
  {
    id: '94c859fa-f366-45c2-b528-16986dbe792c',
    name: 'Beach',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/beach.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/dog.mp4',
    genre: 'Adventure',
  },
  {
    id: 'd73e55a5-385a-48d1-8090-49a73b44b20b',
    name: 'Matrix',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/matrix.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Action',
  },
  {
    id: '8081b81d-4a02-48d8-94b9-cdaad9d394ce',
    name: 'Once Upon a Time in America',
    previewImage:
      'https://13.design.htmlacademy.pro/static/film/preview/Once_Upon_a_Time_in_America.jpg',
    previewVideoLink:
      'https://13.design.htmlacademy.pro/static/film/video/traffic.mp4',
    genre: 'Crime',
  },
];

export { mockFilms };
