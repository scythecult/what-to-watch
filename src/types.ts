export type TStarring = string[];

export type TFilmDetails = {
  id?: string;
  name?: string;
  posterImage?: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink?: string;
  description?: string;
  rating?: number;
  scoresCount?: number;
  director?: string;
  starring?: TStarring;
  runTime: number;
  genre: string;
  released?: number;
  isFavorite?: boolean;
};

export type TFilmComment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: string;
};

export type TFilm = Pick<TFilmDetails, 'id' | 'name' | 'genre'> & {
  previewImage: string;
  previewVideoLink: string;
};

export type TPromoFilm = Pick<
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

export type UserInfoResponse = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
};

export type UserInfoRequest = {
  email: string;
  password: string;
};

export type ErrorInfo = {
  serverMessage: string;
  responseMessage: string;
};
