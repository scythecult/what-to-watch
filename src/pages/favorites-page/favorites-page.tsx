import { FavoritesCount } from '../../components/favorites-count/favorites-count';
import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { Message } from '../../components/message/message';
import { UserNav } from '../../components/user-nav/user-nav';
import { TFilm } from '../../types';

type TFavoritesPageProps = {
  favoriteFilms?: TFilm[];
};

const FavoritesPage = ({ favoriteFilms }: TFavoritesPageProps) => {
  const shouldRenderFavoriteFilms = !!favoriteFilms;

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <Logo />
        <FavoritesCount count={11} />
        <UserNav />
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {!shouldRenderFavoriteFilms && <Message />}

          {shouldRenderFavoriteFilms &&
            favoriteFilms.map((favoriteFilm) => {
              const { id } = favoriteFilm;

              return <FilmCard key={id} {...favoriteFilm} />;
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { FavoritesPage };
