type TStarring = string[];

type TFilmDetails = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: TStarring;
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

type TFilmComment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: string;
};

type TFilm = Pick<TFilmDetails, 'id' | 'name' | 'genre'> & {
  previewImage: string;
  previewVideoLink: string;
};

type TPromoFilm = Pick<
  TFilmDetails,
  | 'id'
  | 'name'
  | 'genre'
  | 'posterImage'
  | 'backgroundImage'
  | 'videoLink'
  | 'released'
  | 'isFavorite'
>;

export type { TFilmDetails, TFilmComment, TFilm, TPromoFilm };
