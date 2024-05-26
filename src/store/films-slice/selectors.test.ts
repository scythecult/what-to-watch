import { LoadingState } from '../../const';
import {
  createFilmComments,
  createFilmDetails,
  createFilms,
  createPromoFilm,
} from '../../utils/mocks';
import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { filmsSlice } from './films-slice';
import {
  filmCommentsSelector,
  filmCreateCommentLoadingStateSelector,
  filmDetailsLoadingStateSelector,
  filmDetailsSelector,
  filmsSelector,
  promoFilmSelector,
} from './selectors';

describe('FilmsSlice selectors', () => {
  let store: StoreType;

  beforeEach(() => {
    store = getStore();
  });

  it('Should return initial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.Films];
    const action = { type: '' };

    const result = filmsSlice.reducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('Should return filtered films', () => {
    const EXPECTED_FILTER = 'Funk';
    const state = store.getState();
    const filmsStoreSlice = { ...state[StoreName.Films] };
    const filterStoreSlice = { ...state[StoreName.Filters] };
    const films = createFilms(EXPECTED_FILTER);

    filterStoreSlice.currentFilter = EXPECTED_FILTER;
    filmsStoreSlice.films = films;

    const [filteredFilm] = filmsSelector({
      [StoreName.Films]: filmsStoreSlice,
      [StoreName.Filters]: filterStoreSlice,
    });
    const { genre } = filteredFilm;

    expect(genre).toBe(EXPECTED_FILTER);
  });

  it('Should return promo film', () => {
    const state = store.getState();
    const filmsStoreSlice = { ...state[StoreName.Films] };
    const promoFilm = createPromoFilm();

    filmsStoreSlice.promoFilm = promoFilm;

    const result = promoFilmSelector({ [StoreName.Films]: filmsStoreSlice });

    expect(result).toEqual(promoFilm);
  });

  it('Should return film details and loading state', () => {
    const state = store.getState();
    const filmsStoreSlice = { ...state[StoreName.Films] };
    const filmDetails = createFilmDetails();
    const EXPECTED_LOADING_STATE = LoadingState.Fulfilled;

    filmsStoreSlice.filmDetails = filmDetails;
    filmsStoreSlice.filmDetailsLoadingState = EXPECTED_LOADING_STATE;

    const filmDetailsResult = filmDetailsSelector({
      [StoreName.Films]: filmsStoreSlice,
    });
    const loadingStateResult = filmDetailsLoadingStateSelector({
      [StoreName.Films]: filmsStoreSlice,
    });

    expect(filmDetailsResult).toEqual(filmDetails);
    expect(loadingStateResult).toBe(EXPECTED_LOADING_STATE);
  });

  describe('Film comments', () => {
    it('Should return film comments and loading state', () => {
      const state = store.getState();
      const filmsStoreSlice = { ...state[StoreName.Films] };
      const filmComments = createFilmComments();
      const EXPECTED_LOADING_STATE = LoadingState.Fulfilled;

      filmsStoreSlice.filmComments = filmComments;
      filmsStoreSlice.filmCreateCommentLoadingState = EXPECTED_LOADING_STATE;

      const commnetsResult = filmCommentsSelector({
        [StoreName.Films]: filmsStoreSlice,
      });
      const loadingStateResult = filmCreateCommentLoadingStateSelector({
        [StoreName.Films]: filmsStoreSlice,
      });

      expect(commnetsResult).toEqual(filmComments);
      expect(loadingStateResult).toBe(EXPECTED_LOADING_STATE);
    });
  });
});
