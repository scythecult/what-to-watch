import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './review-form.module.css';
import { StarRating } from '../star-rating/star-rating';
import { LoadingState, ReviewFormBoundary } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { createFilmComment } from '../../store/async-actions';
import { filmCreateCommentLoadingStateSelector } from '../../store/films-slice/selectors';
import { Spinner } from '../spinner/spinner';

type TReviewForm = { filmId: string | undefined };

export type TUserReviewData = {
  filmId: string;
  rating: number;
  comment: string;
};

const ReviewForm = ({ filmId = '' }: TReviewForm) => {
  const dispatch = useAppDispatch();
  const commentCreateLoadingState = useAppSelector(
    filmCreateCommentLoadingStateSelector
  );
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const isMinCharsLenghtInRange =
    comment.length > 0 && comment.length <= ReviewFormBoundary.MinLength;
  const isFormValid =
    comment.length > ReviewFormBoundary.MinLength &&
    comment.length < ReviewFormBoundary.MaxLength &&
    rating > 0;

  const handleRatingClick = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const handlecommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(createFilmComment({ filmId, rating, comment }));
    setRating(0);
    setComment('');
  };

  if (commentCreateLoadingState === LoadingState.Pending) {
    return <Spinner />;
  }

  return (
    <form className="add-review__form" action="#" onSubmit={handleFormSubmit}>
      <StarRating onRatingClick={handleRatingClick} />

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={comment}
          onChange={handlecommentChange}
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
            Сharacters left: {ReviewFormBoundary.MinLength - comment.length}
          </b>
        )}
      </p>
    </form>
  );
};

export { ReviewForm };
