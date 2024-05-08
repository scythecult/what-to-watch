import { createSlice } from '@reduxjs/toolkit';
import { TFilm, TFilmDetails, TPromoFilm } from '../../types';
import { StoreName } from '../const';
import { loadFilmDetails, loadFilms, loadPromoFilm } from '../async-actions';

export type FilmsState = {
  films: TFilm[];
  promoFilm: TPromoFilm | null;
  filmDetails: TFilmDetails | null;
};

const initialState: FilmsState = {
  films: [],
  promoFilm: null,
  filmDetails: null,
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
    });
    builder.addCase(loadFilmDetails.fulfilled, (state, action) => {
      state.filmDetails = action.payload;
    });
  },
});
