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

export { MAX_RATING_STAR_COUNT, AppRoute };
