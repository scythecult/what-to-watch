const MAX_RATING_STAR_COUNT = 10;

const MessageText = {
  EmptyFilmPage: 'Sorry, there is no films...',
  NotFoundPage: '404 Page Not Found',
} as const;

const AppRoute = {
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

const FILM_TABS = ['overview', 'details', 'reviews'] as const;

const AuthStatus = {
  Unknown: 'UNKNOWN',
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;

export { MAX_RATING_STAR_COUNT, AppRoute, AuthStatus, MessageText, FILM_TABS };
