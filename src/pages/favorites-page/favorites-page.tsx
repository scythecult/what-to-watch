import { FavoritesCount } from '../../components/favorites-count/favorites-count';
import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo';
import { UserNav } from '../../components/user-nav/user-nav';

const FavoritesPage = () => (
  <div className="user-page">
    <Header className="user-page__head">
      <Logo />
      <FavoritesCount count={11} />
      <UserNav />
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        <FilmCard />
      </div>
    </section>

    <Footer />
  </div>
);

export { FavoritesPage };
