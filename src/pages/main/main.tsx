import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { GenresFilter } from '../../components/genres-filter/genres-filter';
import { HeroFilmCard } from '../../components/hero-film-card/hero-film-card';

const FILMS_COUNT = 20;
const mockFilms = Array.from({ length: FILMS_COUNT })
  .fill('')
  .map(() => ({
    id: crypto.randomUUID(),
  }));

const Main = () => (
  <>
    <HeroFilmCard />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresFilter />

        <div className="catalog__films-list">
          {mockFilms.map((element) => (
            <FilmCard key={element.id} />
          ))}
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

export { Main };
