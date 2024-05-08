import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer/footer';
import { MainFilmCard } from '../../components/main-film-card/main-film-card';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import {
  filmsSelector,
  promoFilmSelector,
} from '../../store/films-slice/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setFilter } from '../../store/filter-slice/filter-slice';
import { Catalog } from '../../components/catalog/catalog';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { UserNav } from '../../components/user-nav/user-nav';
import { DEFAULT_FILTER } from '../../store/const';

const MainPage = () => {
  const { filter: genreFilter = DEFAULT_FILTER } = useParams();
  const dispatch = useAppDispatch();
  const films = useAppSelector(filmsSelector);
  const promoFilm = useAppSelector(promoFilmSelector);

  useEffect(() => {
    let isMounted = true;

    if (genreFilter && isMounted) {
      dispatch(setFilter(genreFilter));
    }

    return () => {
      isMounted = false;
    };
  }, [genreFilter, dispatch]);

  return (
    <>
      <Helmet>
        <title>Что посмотреть. Главная</title>
      </Helmet>
      <h1 className="visually-hidden">WTW</h1>

      {promoFilm ? (
        <MainFilmCard filmData={promoFilm}>
          <Header className="film-card__head">
            <Logo />
            <UserNav />
          </Header>
        </MainFilmCard>
      ) : (
        <Header>
          <Logo />
          <UserNav />
        </Header>
      )}

      <div className="page-content">
        <Catalog key={genreFilter} films={films} />

        <Footer />
      </div>
    </>
  );
};

export { MainPage };
