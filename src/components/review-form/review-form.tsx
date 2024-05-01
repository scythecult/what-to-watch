import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './review-form.module.css';
import { StarRating } from '../star-rating/star-rating';
import { ReviewFormBoundary } from '../../const';

type TReviewForm = { filmId: string | undefined };
type TUserReviewData = {
  filmId: string;
  rating: number;
  reviewText: string;
};

const ReviewForm = ({ filmId = '' }: TReviewForm) => {
  const [reviewData, setReviewData] = useState<TUserReviewData>({
    filmId,
    rating: 0,
    reviewText: '',
  });

  const { reviewText, rating } = reviewData;
  const isMinCharsLenghtInRange =
    reviewText.length > 0 && reviewText.length <= ReviewFormBoundary.MinLength;
  const isFormValid =
    reviewText.length > ReviewFormBoundary.MinLength &&
    reviewText.length < ReviewFormBoundary.MaxLength &&
    rating > 0;

  const handleRatingClick = (ratingValue: number) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      rating: ratingValue,
    }));
  };

  const handleReviewTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      reviewText: evt.target.value,
    }));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // eslint-disable-next-line no-console
    console.log(reviewData);
  };

  return (
    <form className="add-review__form" action="#" onSubmit={handleFormSubmit}>
      <StarRating onRatingClick={handleRatingClick} />

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewText}
          onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!isFormValid}
          >
            Post
          </button>
        </div>
      </div>
      <p className={styles['add-review__description']}>
        To post review please make sure to set <b>rating </b>and describe the
        film with at least <b>50 characters</b>.
        {isMinCharsLenghtInRange && (
          <b>
            Сharacters left: {ReviewFormBoundary.MinLength - reviewText.length}
          </b>
        )}
      </p>
    </form>
  );
};

export { ReviewForm };
