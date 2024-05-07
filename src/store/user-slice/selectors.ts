import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StoreName } from '../const';

export const userAuthStatusSelector = createSelector(
  [(state: Pick<RootState, typeof StoreName.User>) => state[StoreName.User]],
  ({ authorizationStatus }) => authorizationStatus
);

export const userInfoSelector = createSelector(
  [(state: Pick<RootState, typeof StoreName.User>) => state[StoreName.User]],
  ({ name, email, avatarUrl }) => ({ name, email, avatarUrl })
);
