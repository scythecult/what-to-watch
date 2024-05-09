import { Outlet, useParams } from 'react-router-dom';
import { FilmDescription } from '../../components/film-description/film-description';
import { FilmTabs } from '../../components/film-tabs/film-tabs';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { UserNav } from '../../components/user-nav/user-nav';
import { Helmet } from 'react-helmet-async';
import { FilmList } from '../../components/film-list/film-list';
import { FilmNav } from '../../components/film-nav/film-nav';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import {
  loadFilmComments,
  loadFilmDetails,
  loadSimilarFilms,
} from '../../store/async-actions';
import {
  filmDetailsSelector,
  similarFilmsSelector,
} from '../../store/films-slice/selectors';
import { Spinner } from '../../components/spinner/spinner';

const FilmPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const filmDetails = useAppSelector(filmDetailsSelector);
  const similiarFilms = useAppSelector(similarFilmsSelector);

  useEffect(() => {
    let isMounted = true;

    if (id && isMounted) {
      dispatch(loadFilmDetails(id));
      dispatch(loadSimilarFilms(id));
      dispatch(loadFilmComments(id));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  if (!filmDetails) {
    return <Spinner />;
  }

  const { name, backgroundColor, backgroundImage, posterImage } = filmDetails;

  return (
    <>
      <Helmet>
        <title>Что посмотреть. {name}</title>
      </Helmet>
      <section
        className="film-card film-card--full"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head">
            <Logo />
            <UserNav />
          </Header>

          <div className="film-card__wrap">
            <FilmDescription filmDetails={filmDetails}>
              {id && <FilmNav filmId={id} />}
            </FilmDescription>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <FilmTabs />

              <Outlet />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similiarFilms} />
        </section>
        <Footer />
      </div>
    </>
  );
};

export { FilmPage };
