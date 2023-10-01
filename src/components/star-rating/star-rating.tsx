import { Fragment } from 'react';
import { MAX_RATING_STAR_COUNT } from '../../const';
import { generateRatingValues } from '../../utils';

const ratingValues = generateRatingValues(MAX_RATING_STAR_COUNT);

const StarRating = () => (
  <div className="rating">
    <div className="rating__stars">
      {ratingValues.map((ratingValue) => (
        <Fragment key={ratingValue}>
          <input
            className="rating__input"
            id={`star-${ratingValue}`}
            type="radio"
            name="rating"
            defaultValue={ratingValue}
          />
          <label className="rating__label" htmlFor={`star-${ratingValue}`}>
            Rating {ratingValue}
          </label>
        </Fragment>
      ))}
    </div>
  </div>
);

export { StarRating };
