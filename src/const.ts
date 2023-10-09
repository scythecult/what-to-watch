const MAX_RATING_STAR_COUNT = 10;

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

const AuthStatus = {
  Unknown: 'UNKNOWN',
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;

export { MAX_RATING_STAR_COUNT, AppRoute, AuthStatus };
