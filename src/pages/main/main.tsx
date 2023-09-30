import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { GenresFilter } from '../../components/genres-filter/genres-filter';
import { HeroFilmCard } from '../../components/hero-film-card/hero-film-card';

export type TMockFilm = {
  id: string;
};

type TMainProps = {
  films: TMockFilm[];
};

const Main = ({ films = [] }: TMainProps) => (
  <>
    <HeroFilmCard />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresFilter />

        <div className="catalog__films-list">
          {films.map((element) => (
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
