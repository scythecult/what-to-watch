import { createSlice } from '@reduxjs/toolkit';
import { TFilm, TPromoFilm } from '../../types';
import { StoreName } from '../const';
import { mockFilms } from '../../mocks/films';
import { mockPromo } from '../../mocks/promo';

export type FilmsState = {
  films: TFilm[];
  promoFilm: TPromoFilm;
};

const initialState: FilmsState = {
  films: mockFilms,
  promoFilm: mockPromo,
};

export const filmsSlice = createSlice({
  name: StoreName.Films,
  initialState,
  reducers: {},
});
