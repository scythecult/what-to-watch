import { PropsWithChildren } from 'react';

type TReviewForm = PropsWithChildren;

const ReviewForm = ({ children }: TReviewForm) => (
  <form action="#" className="add-review__form">
    {children}
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"
        defaultValue={''}
      />
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">
          Post
        </button>
      </div>
    </div>
  </form>
);

export { ReviewForm };
