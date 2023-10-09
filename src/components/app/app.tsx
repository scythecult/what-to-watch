import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { FilmPage } from '../../pages/film-page/film-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { TFilm, TFilmDetails, TPromoFilm } from '../../types';
import { PlayerPage } from '../../pages/player-page/player-page';
import { ReviewPage } from '../../pages/review-page/review-page';
import { AppRoute, AuthStatus } from '../../const';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

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
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage films={mockFilms} promoFilm={mockPromoFilm} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <FavoritesPage favoriteFilms={mockFilms} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.VideoPlayer} element={<PlayerPage />} />
        <Route
          path={`${AppRoute.Film}/:id/*`}
          element={
            <FilmPage
              filmDetails={mockFilmDetails}
              similiarFilms={mockSimiliarFilms}
            />
          }
        />
        <Route path={AppRoute.Review} element={<ReviewPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export { App };
