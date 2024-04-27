import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer/footer';
import { ItemsFilter } from '../../components/items-filter/items-filter';
import { MainFilmCard } from '../../components/main-film-card/main-film-card';
import { FilmList } from '../../components/film-list/film-list';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import {
  filmsSelector,
  promoFilmSelector,
} from '../../store/films-slice/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setFilter } from '../../store/filter-slice/filter-slice';

const MainPage = () => {
  const { filter = '' } = useParams();
  const dispatch = useAppDispatch();
  const films = useAppSelector(filmsSelector);
  const promoFilm = useAppSelector(promoFilmSelector);

  useEffect(() => {
    dispatch(setFilter(filter));
  }, [filter, dispatch]);

  return (
    <>
      <Helmet>
        <title>Что посмотреть. Главная</title>
      </Helmet>
      <MainFilmCard {...promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ItemsFilter />

          <FilmList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export { MainPage };
