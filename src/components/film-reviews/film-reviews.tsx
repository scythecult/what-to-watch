import cn from 'classnames';
import { useAppSelector } from '../../hooks/use-store';
import { filmCommentsSelector } from '../../store/films-slice/selectors';
import { FilmReview } from '../film-review/film-review';
import styles from './film-review.module.css';

const FilmReviews = () => {
  const filmComments = useAppSelector(filmCommentsSelector);
  const classNameFinal = cn(
    'film-card__reviews film-card__row',
    styles.filmReviews
  );

  return (
    <div className={classNameFinal}>
      {filmComments.map((filmComment) => (
        <FilmReview key={filmComment.id} commentData={filmComment} />
      ))}
    </div>
  );
};

export { FilmReviews };
