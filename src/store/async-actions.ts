import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreName } from './const';
import { TFilm } from '../types';
import { ApiRoute } from '../const';

export type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
};

const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();

export const loadFilms = createAppAsyncThunk(
  `${StoreName.Films}/loadFilms`,
  async (_arg, { extra: fetchData }) => {
    const { data: films } = await fetchData.get<TFilm[]>(ApiRoute.Films);

    return films;
  }
);
