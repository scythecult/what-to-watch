import { Helmet } from 'react-helmet-async';
import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { GenresFilter } from '../../components/genres-filter/genres-filter';
import { MainFilmCard } from '../../components/main-film-card/main-film-card';
import { TFilm, TPromoFilm } from '../../types';

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

        <div className="catalog__films-list">
          {films.map((film) => {
            const { id } = film;

            return <FilmCard key={id} {...film} />;
          })}
        </div>

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
