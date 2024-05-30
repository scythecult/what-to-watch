import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StoreName } from '../const';

export type UserAuthState = Pick<RootState, typeof StoreName.User>;

export const userAuthStatusSelector = createSelector(
  [(state: UserAuthState) => state[StoreName.User]],
  ({ authorizationStatus }) => authorizationStatus
);

export const userInfoSelector = createSelector(
  [(state: UserAuthState) => state[StoreName.User]],
  ({ name, email, avatarUrl }) => ({ name, email, avatarUrl })
);
