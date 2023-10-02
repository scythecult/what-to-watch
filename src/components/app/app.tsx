import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { FilmPage } from '../../pages/film-page/film-page';
// import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { TFilm, TFilmDetails, TPromoFilm } from '../../types';
// import { PlayerPage } from '../../pages/player-page/player-page';
import { ReviewPage } from '../../pages/review-page/review-page';

type TAppProps = {
  mockFilms: TFilm[];
  mockPromoFilm: TPromoFilm;
  mockFilmDetails: TFilmDetails;
  mockSimiliarFilms: TFilm[];
};

const App = ({
  mockFilms,
  mockPromoFilm,
  mockFilmDetails,
  mockSimiliarFilms,
}: TAppProps) => (
  <>
    {/* <MainPage films={mockFilms} promoFilm={mockPromoFilm} /> */}
    {/* <LoginPage /> */}
    {/* <FavoritesPage favoriteFilms={mockFilms} /> */}
    {/* <PlayerPage /> */}
    {/* <FilmPage filmDetails={mockFilmDetails} similiarFilms={mockSimiliarFilms} /> */}
    <ReviewPage />
  </>
);

export { App };
