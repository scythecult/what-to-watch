import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreName } from './const';
import { TFilm, TPromoFilm, UserInfoRequest, UserInfoResponse } from '../types';
import { ApiRoute } from '../const';
import { setToken } from '../service/handle-token';

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

export const loadPromoFilm = createAppAsyncThunk(
  `${StoreName.Films}/loadPromoFilm`,
  async (_arg, { extra: fetchData }) => {
    const { data: promoFilm } = await fetchData.get<TPromoFilm>(
      ApiRoute.PromoFilm
    );

    return promoFilm;
  }
);

export const checkAuthStatus = createAppAsyncThunk(
  `${StoreName.User}/checkAuthStatus`,
  async (_arg, { extra: fetchData }) => {
    const { data: userInfo } = await fetchData.get<UserInfoResponse>(
      ApiRoute.UserInfo
    );
    // eslint-disable-next-line no-console
    console.log({ userInfo });

    return userInfo;
  }
);

export const login = createAppAsyncThunk(
  `${StoreName.User}/login`,
  async ({ email, password }: UserInfoRequest, { extra: fetchData }) => {
    const { data: userInfo } = await fetchData.post<UserInfoResponse>(
      ApiRoute.UserInfo,
      { email, password }
    );
    const { token } = userInfo;

    setToken(token);

    return userInfo;
  }
);
