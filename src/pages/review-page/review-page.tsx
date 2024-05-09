import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { ReviewForm } from '../../components/review-form/review-form';
import { UserNav } from '../../components/user-nav/user-nav';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-store';
import { filmDetailsSelector } from '../../store/films-slice/selectors';
import { Spinner } from '../../components/spinner/spinner';

const ReviewPage = () => {
  const { id } = useParams();
  const filmDetails = useAppSelector(filmDetailsSelector);

  if (!filmDetails) {
    return <Spinner />;
  }

  const { backgroundImage, posterImage, name } = filmDetails;

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Что посмотреть. Напишите отзыв</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header>
          <Logo />
          <Breadcrumbs filmId={id} filmTitle={name} />
          <UserNav />
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm filmId={id} />
      </div>
    </section>
  );
};

export { ReviewPage };
