import { Header } from '../header/header';
import { FilmDescription } from '../film-description/film-description';

const MainFilmCard = () => (
  <section className="film-card">
    <div className="film-card__bg">
      <img
        src="img/bg-the-grand-budapest-hotel.jpg"
        alt="The Grand Budapest Hotel"
      />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <Header />

    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>

        <FilmDescription />
      </div>
    </div>
  </section>
);

export { MainFilmCard };
