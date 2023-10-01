import { Header } from '../header/header';
import { FilmDescription } from '../film-description/film-description';
import { Logo } from '../logo';
import { UserNav } from '../user-nav/user-nav';
import { TPromoFilm } from '../../types';

type TMainFilmCardProps = TPromoFilm;

const MainFilmCard = (filmData: TMainFilmCardProps) => {
  const { name, backgroundImage } = filmData;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head">
        <Logo />
        <UserNav />
      </Header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmDescription {...filmData} withPoster />
        </div>
      </div>
    </section>
  );
};

export { MainFilmCard };
