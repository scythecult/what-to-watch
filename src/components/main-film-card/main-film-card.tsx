import { FilmDescription } from '../film-description/film-description';
import { TPromoFilm } from '../../types';
import { FilmNav } from '../film-nav/film-nav';
import { PropsWithChildren } from 'react';

type TMainFilmCardProps = PropsWithChildren<{
  filmData: TPromoFilm;
}>;

const MainFilmCard = ({ filmData, children }: TMainFilmCardProps) => {
  const { id, name, backgroundImage } = filmData;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      {children}

      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmDescription filmDetails={filmData} withPoster>
            <FilmNav filmId={id} />
          </FilmDescription>
        </div>
      </div>
    </section>
  );
};

export { MainFilmCard };
