import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { FilmPage } from '../../pages/film-page/film-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage, TMockFilm } from '../../pages/main-page/main-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { ReviewPage } from '../../pages/review-page/review-page';

type TAppProps = {
  mockFilms: TMockFilm[];
};

const App = ({ mockFilms }: TAppProps) => (
  <>
    {/* <MainPage films={mockFilms} /> */}
    {/* <LoginPage /> */}
    {/* <FavoritesPage /> */}
    {/* <PlayerPage /> */}
    {/* <FilmPage /> */}
    <ReviewPage />
  </>
);

export { App };
