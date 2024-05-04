import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StoreName } from '../const';

export const filterSelector = createSelector(
  [
    (state: Pick<RootState, typeof StoreName.Filters>) =>
      state[StoreName.Filters],
  ],
  ({ currentFilter }) => currentFilter
);
