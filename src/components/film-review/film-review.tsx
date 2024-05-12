import cn from 'classnames';
import { TFilmComment } from '../../types';
import styles from './film-review.module.css';
import { formatDate } from '../../utils';

export type FilmReviewProps = {
  commentData: TFilmComment;
};

const FilmReview = ({ commentData }: FilmReviewProps) => {
  const { comment, date, rating, user } = commentData;
  const classNameFinal = cn('review', styles.filmReview);

  return (
    <div className={classNameFinal}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={date}>
            {formatDate(date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export { FilmReview };
