export const MAX_RATING_STAR_COUNT = 10;

export const MessageText = {
  EmptyFilmPage: 'Sorry, there is no films...',
  NotFoundPage: '404 Page Not Found',
} as const;

export type MessageTextKey = keyof typeof MessageText;
export type MessageTextValue = (typeof MessageText)[MessageTextKey];

export const AppRoute = {
  Root: '/',
  Login: '/login',
  VideoPlayer: '/video-player',
  Favorite: '/favorite',
  Film: '/film',
  FilmOverview: 'overview',
  FilmDetails: 'details',
  FilmReviews: 'reviews',
  Review: '/review',
  NotFound: '*',
} as const;

export type AppRouteKey = keyof typeof AppRoute;
export type AppRouteValue = (typeof AppRoute)[AppRouteKey];

export const FILM_TABS = ['overview', 'details', 'reviews'] as const;

export const AuthStatus = {
  Unknown: 'UNKNOWN',
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;

export type AuthStatusKey = keyof typeof AuthStatus;
export type AuthStatusValue = (typeof AuthStatus)[AuthStatusKey];

export const ReviewFormBoundary = {
  MinLength: 50,
  MaxLength: 300,
} as const;

export type ReviewFormBoundaryKey = keyof typeof ReviewFormBoundary;
export type ReviewFormBoundaryValue =
  keyof (typeof ReviewFormBoundary)[ReviewFormBoundaryKey];
