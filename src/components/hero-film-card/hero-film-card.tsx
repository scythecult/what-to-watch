import { Header } from '../header/header';
import { HeroFilmInfo } from '../hero-film-info/hero-film-info';

const HeroFilmCard = () => (
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
      <HeroFilmInfo />
    </div>
  </section>
);

export { HeroFilmCard };
