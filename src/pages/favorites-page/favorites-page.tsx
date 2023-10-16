import { Helmet } from 'react-helmet-async';
import { FavoritesCount } from '../../components/favorites-count/favorites-count';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { UserNav } from '../../components/user-nav/user-nav';
import { TFilm } from '../../types';
import { FilmList } from '../../components/film-list/film-list';

type TFavoritesPageProps = {
  favoriteFilms?: TFilm[];
};

const FavoritesPage = ({ favoriteFilms = [] }: TFavoritesPageProps) => (
  <div className="user-page">
    <Helmet>
      <title>Что посмотреть. Избранное</title>
    </Helmet>
    <Header className="user-page__head">
      <Logo />
      <FavoritesCount count={11} />
      <UserNav />
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList films={favoriteFilms} />
    </section>

    <Footer />
  </div>
);

export { FavoritesPage };
