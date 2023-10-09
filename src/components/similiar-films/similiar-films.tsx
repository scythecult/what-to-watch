import { TFilm } from '../../types';
import { FilmCard } from '../film-card/film-card';

type TSimiliarFilmsProps = { similiarFilms: TFilm[] };

const SimiliarFilms = ({ similiarFilms }: TSimiliarFilmsProps) => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <div className="catalog__films-list">
      {similiarFilms.map((similiarFilm) => {
        const { id } = similiarFilm;

        return <FilmCard key={id} {...similiarFilm} />;
      })}
    </div>
  </section>
);

export { SimiliarFilms };
