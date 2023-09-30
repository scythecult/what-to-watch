import { FilmReview } from '../film-review/film-review';

const FilmReviews = () => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      <FilmReview />
    </div>
    <div className="film-card__reviews-col">
      <FilmReview />
    </div>
  </div>
);

export { FilmReviews };
