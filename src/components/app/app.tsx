import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { FilmPage } from '../../pages/film-page/film-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { TFilm } from '../../types';
import { PlayerPage } from '../../pages/player-page/player-page';
import { ReviewPage } from '../../pages/review-page/review-page';
import { AppRoute } from '../../const';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { FilmOverview } from '../film-overview/film-overview';
import { FilmDetails } from '../film-details/film-details';
import { FilmReviews } from '../film-reviews/film-reviews';

type TAppProps = {
  mockFilms: TFilm[];
};

const App = ({ mockFilms }: TAppProps) => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={`${AppRoute.Root}/:filter?`} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute>
              <FavoritesPage favoriteFilms={mockFilms} />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.VideoPlayer}/:id`} element={<PlayerPage />} />
        <Route path={`${AppRoute.Film}/:id`} element={<FilmPage />}>
          <Route path={AppRoute.FilmOverview} element={<FilmOverview />} />
          <Route path={AppRoute.FilmDetails} element={<FilmDetails />} />
          <Route path={AppRoute.FilmReviews} element={<FilmReviews />} />
        </Route>
        <Route
          path={`${AppRoute.Film}/:id${AppRoute.Review}`}
          element={<ReviewPage />}
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export { App };
