// import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
// import { FilmPage } from '../../pages/film-page/film-page';
// import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { TFilm, TPromoFilm } from '../../types';
// import { PlayerPage } from '../../pages/player-page/player-page';
// import { ReviewPage } from '../../pages/review-page/review-page';

type TAppProps = {
  mockFilms: TFilm[];
  mockPromoFilm: TPromoFilm;
};

const App = ({ mockFilms, mockPromoFilm }: TAppProps) => (
  <>
    <MainPage films={mockFilms} promoFilm={mockPromoFilm} />
    {/* <LoginPage /> */}
    {/* <FavoritesPage /> */}
    {/* <PlayerPage /> */}
    {/* <FilmPage /> */}
    {/* <ReviewPage /> */}
  </>
);

export { App };
