import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { ReviewForm } from '../../components/review-form/review-form';
import { StarRating } from '../../components/star-rating/star-rating';
import { UserNav } from '../../components/user-nav/user-nav';

const ReviewPage = () => (
  <section className="film-card film-card--full">
    <div className="film-card__header">
      <div className="film-card__bg">
        <img
          src="img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header>
        <Logo />
        <Breadcrumbs />
        <UserNav />
      </Header>

      <div className="film-card__poster film-card__poster--small">
        <img
          src="img/the-grand-budapest-hotel-poster.jpg"
          alt="The Grand Budapest Hotel poster"
          width={218}
          height={327}
        />
      </div>
    </div>
    <div className="add-review">
      <ReviewForm>
        <StarRating />
      </ReviewForm>
    </div>
  </section>
);

export { ReviewPage };
