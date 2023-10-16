import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer/footer';
import { GenresFilter } from '../../components/genres-filter/genres-filter';
import { MainFilmCard } from '../../components/main-film-card/main-film-card';
import { TFilm, TPromoFilm } from '../../types';
import { FilmList } from '../../components/film-list/film-list';

type TMainProps = {
  films: TFilm[];
  promoFilm: TPromoFilm;
};

// запрос на промофильм + фильмы будет уходить во время инициализации приложения
// будет получать из стора список фильмов + промофильм

const MainPage = ({ films = [], promoFilm }: TMainProps) => (
  <>
    <Helmet>
      <title>Что посмотреть. Главная</title>
    </Helmet>
    <MainFilmCard {...promoFilm} />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresFilter />

        <FilmList films={films} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export { MainPage };
