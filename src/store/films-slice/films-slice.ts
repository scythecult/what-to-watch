import { createSlice } from '@reduxjs/toolkit';
import { TFilm, TFilmComment, TFilmDetails, TPromoFilm } from '../../types';
import { StoreName } from '../const';
import {
  createFilmComment,
  loadFilmComments,
  loadFilmDetails,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms,
} from '../async-actions';
import { LoadingState, LoadingStateValue } from '../../const';

export type FilmsState = {
  films: TFilm[];
  promoFilm: TPromoFilm | null;
  filmDetails: TFilmDetails | null;
  similarFilms: TFilm[];
  filmComments: TFilmComment[];
  filmCreateCommentLoadingState: LoadingStateValue;
  filmDetailsLoadingState: LoadingStateValue;
};

const initialState: FilmsState = {
  films: [],
  promoFilm: null,
  filmDetails: null,
  similarFilms: [],
  filmComments: [],
  filmCreateCommentLoadingState: LoadingState.Idle,
  filmDetailsLoadingState: LoadingState.Idle,
};

export const filmsSlice = createSlice({
  name: StoreName.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
    builder.addCase(loadPromoFilm.fulfilled, (state, action) => {
      state.promoFilm = action.payload;
    });
    builder.addCase(loadFilmDetails.pending, (state) => {
      state.filmDetails = null;
      state.filmDetailsLoadingState = LoadingState.Pending;
    });
    builder.addCase(loadFilmDetails.fulfilled, (state, action) => {
      state.filmDetails = action.payload;
      state.filmDetailsLoadingState = LoadingState.Fulfilled;
    });
    builder.addCase(loadFilmDetails.rejected, (state) => {
      state.filmDetails = null;
      state.filmDetailsLoadingState = LoadingState.Error;
    });
    builder.addCase(loadSimilarFilms.fulfilled, (state, action) => {
      state.similarFilms = action.payload;
    });
    builder.addCase(loadFilmComments.fulfilled, (state, action) => {
      state.filmComments = action.payload;
    });
    builder.addCase(createFilmComment.pending, (state) => {
      state.filmCreateCommentLoadingState = LoadingState.Pending;
    });
    builder.addCase(createFilmComment.fulfilled, (state, action) => {
      state.filmComments.push(action.payload);
      state.filmCreateCommentLoadingState = LoadingState.Fulfilled;
    });
  },
});
