import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StoreName, StoreNameValue } from '../const';

export const filterSelector = createSelector(
  [(state: Pick<RootState, StoreNameValue>) => state[StoreName.Filters]],
  ({ currentFilter }) => currentFilter
);
