import { createSlice } from '@reduxjs/toolkit';
import { TFilm, TPromoFilm } from '../../types';
import { StoreName } from '../const';
import { loadFilms, loadPromoFilm } from '../async-actions';

export type FilmsState = {
  films: TFilm[];
  promoFilm: TPromoFilm | null;
};

const initialState: FilmsState = {
  films: [],
  promoFilm: null,
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
  },
});
