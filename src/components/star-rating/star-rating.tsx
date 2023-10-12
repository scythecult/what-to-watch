import { Fragment } from 'react';
import { MAX_RATING_STAR_COUNT } from '../../const';
import { generateRatingValues } from '../../utils';

type TStarRatingProps = {
  onRatingClick: (ratingValue: number) => void;
};

const ratingValues = generateRatingValues(MAX_RATING_STAR_COUNT);

const StarRating = ({ onRatingClick }: TStarRatingProps) => (
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
          <label
            className="rating__label"
            htmlFor={`star-${ratingValue}`}
            onClick={() => onRatingClick(ratingValue)}
          >
            Rating {ratingValue}
          </label>
        </Fragment>
      ))}
    </div>
  </div>
);

export { StarRating };
