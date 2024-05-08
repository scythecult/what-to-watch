import { useAppSelector } from '../../hooks/use-store';
import { filmDetailsSelector } from '../../store/films-slice/selectors';
import { FilmRating } from '../film-rating/film-rating';
import { NoInfo } from '../no-info/no-info';
import { Starring } from '../starring/starring';

const FilmOverview = () => {
  const filmDetails = useAppSelector(filmDetailsSelector);

  if (!filmDetails) {
    return <NoInfo />;
  }

  const {
    rating = 0,
    scoresCount = 0,
    description = '',
    director,
    starring,
  } = filmDetails;

  return (
    <>
      <FilmRating rating={rating} scoresCount={scoresCount} />
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <Starring starring={starring} />
      </div>
    </>
  );
};

export { FilmOverview };
