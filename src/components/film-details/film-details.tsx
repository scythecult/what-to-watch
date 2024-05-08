import { useAppSelector } from '../../hooks/use-store';
import { filmDetailsSelector } from '../../store/films-slice/selectors';
import { formatTime } from '../../utils';
import { NoInfo } from '../no-info/no-info';
import styles from './film-details.module.css';

const FilmDetails = () => {
  const filmDetails = useAppSelector(filmDetailsSelector);

  if (!filmDetails) {
    return <NoInfo />;
  }

  const {
    runTime,
    genre = '',
    released = 0,
    director,
    starring = [],
  } = filmDetails;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className={`film-card__details-value ${styles.filmDetails}`}>
            {starring.map((star) => (
              <span key={star}>{star}</span>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {formatTime(runTime)}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

export { FilmDetails };
