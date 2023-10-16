import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { ReviewForm } from '../../components/review-form/review-form';
import { UserNav } from '../../components/user-nav/user-nav';
import { useParams } from 'react-router-dom';

const ReviewPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-console
  console.log(id);

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Что посмотреть. Напишите отзыв</title>
      </Helmet>
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
          <Breadcrumbs filmId={id} />
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
        <ReviewForm filmId={id} />
      </div>
    </section>
  );
};

export { ReviewPage };
