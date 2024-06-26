import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreName } from './const';
import {
  TFilm,
  TFilmComment,
  TFilmDetails,
  TPromoFilm,
  UserInfoRequest,
  UserInfoResponse,
} from '../types';
import { ApiRoute } from '../const';
import { dropToken, setToken } from '../service/handle-token';
import { TUserReviewData } from '../components/review-form/review-form';

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

export const loadFilmDetails = createAppAsyncThunk(
  `${StoreName.Films}/loadFilmDetails`,
  async (filmId: string, { extra: fetchData }) => {
    const { data: filmDetails } = await fetchData.get<TFilmDetails>(
      `${ApiRoute.Films}/${filmId}`
    );

    return filmDetails;
  }
);

export const loadSimilarFilms = createAppAsyncThunk(
  `${StoreName.Films}/loadSimilarFilms`,
  async (filmId: string, { extra: fetchData }) => {
    const { data: similarFilms } = await fetchData.get<TFilm[]>(
      `${ApiRoute.Films}/${filmId}/similar`
    );

    return similarFilms;
  }
);

export const loadFilmComments = createAppAsyncThunk(
  `${StoreName.Films}/loadFilmComments`,
  async (filmId: string, { extra: fetchData }) => {
    const { data: filmComments } = await fetchData.get<TFilmComment[]>(
      `${ApiRoute.Comments}/${filmId}`
    );

    return filmComments;
  }
);

export const createFilmComment = createAppAsyncThunk(
  `${StoreName.Films}/createFilmComment`,
  async (reviewData: TUserReviewData, { extra: fetchData }) => {
    const { filmId, rating, comment } = reviewData;
    const { data: newComment } = await fetchData.post<TFilmComment>(
      `${ApiRoute.Comments}/${filmId}`,
      { comment, rating }
    );

    return newComment;
  }
);

export const checkAuthStatus = createAppAsyncThunk(
  `${StoreName.User}/checkAuthStatus`,
  async (_arg, { extra: fetchData }) => {
    const { data: userInfo } = await fetchData.get<UserInfoResponse>(
      ApiRoute.UserInfo
    );

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

export const logout = createAppAsyncThunk(
  `${StoreName.User}/logout`,
  async (_arg, { extra: fetchData }) => {
    await fetchData.delete(ApiRoute.Logout);

    dropToken();
  }
);
