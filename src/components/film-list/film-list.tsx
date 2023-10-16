import { MessageText } from '../../const';
import { TFilm } from '../../types';
import { FilmCard } from '../film-card/film-card';
import { Message } from '../message/message';

type TFilmListProps = {
  films: TFilm[];
};

const FilmList = ({ films = [] }: TFilmListProps) => (
  <div className="catalog__films-list">
    {!films.length ? (
      <Message message={MessageText.EmptyFilmPage} />
    ) : (
      films.map((film) => {
        const { id } = film;

        return <FilmCard key={id} {...film} />;
      })
    )}
  </div>
);

export { FilmList };
