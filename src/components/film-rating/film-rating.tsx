import { getRating } from '../../utils';

export type FilmRatingProps = {
  rating: number;
  scoresCount: number;
};

export const FilmRating = ({ rating, scoresCount }: FilmRatingProps) => (
  <div className="film-rating">
    <div className="film-rating__score">{rating}</div>
    <p className="film-rating__meta">
      <span className="film-rating__level">{getRating(rating)}</span>
      <span className="film-rating__count">{scoresCount} ratings</span>
    </p>
  </div>
);
