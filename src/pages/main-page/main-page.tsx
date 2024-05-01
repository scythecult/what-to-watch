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

const MainPage = () => {
  const { filter: genreFilter = '' } = useParams();
  const dispatch = useAppDispatch();
  const films = useAppSelector(filmsSelector);
  const promoFilm = useAppSelector(promoFilmSelector);

  useEffect(() => {
    dispatch(setFilter(genreFilter));
  }, [genreFilter, dispatch]);

  return (
    <>
      <Helmet>
        <title>Что посмотреть. Главная</title>
      </Helmet>
      <MainFilmCard {...promoFilm} />

      <div className="page-content">
        <Catalog key={genreFilter} films={films} />

        <Footer />
      </div>
    </>
  );
};

export { MainPage };
