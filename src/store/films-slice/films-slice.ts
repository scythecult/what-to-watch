import { createSlice } from '@reduxjs/toolkit';
import { TFilm, TPromoFilm } from '../../types';
import { StoreName } from '../const';
import { mockPromo } from '../../mocks/promo';
import { loadFilms } from '../async-actions';

export type FilmsState = {
  films: TFilm[];
  promoFilm: TPromoFilm;
};

const initialState: FilmsState = {
  films: [],
  promoFilm: mockPromo,
};

export const filmsSlice = createSlice({
  name: StoreName.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});
