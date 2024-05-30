import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StoreName } from '../const';

export type appErrorInfoState = Pick<RootState, typeof StoreName.AppError>;

export const appErrorInfoSelector = createSelector(
  [(state: appErrorInfoState) => state[StoreName.AppError]],
  ({ errorInfo }) => errorInfo
);
