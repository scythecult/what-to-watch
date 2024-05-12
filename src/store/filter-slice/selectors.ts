import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StoreName } from '../const';

export type FiltersSliceState = Pick<RootState, typeof StoreName.Filters>;

export const filterSelector = createSelector(
  [(state: FiltersSliceState) => state[StoreName.Filters]],
  ({ currentFilter }) => currentFilter
);
