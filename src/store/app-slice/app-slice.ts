import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ErrorInfo } from '../../types';
import { StoreName } from '../const';

export type AppErrorState = {
  errorInfo: ErrorInfo | null;
};

export const initialState: AppErrorState = {
  errorInfo: null,
};

export const appErrorSlice = createSlice({
  name: StoreName.AppError,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorInfo>) => {
      state.errorInfo = action.payload;
    },
    removeError: (state) => {
      state.errorInfo = null;
    },
  },
});

export const { setError, removeError } = appErrorSlice.actions;
