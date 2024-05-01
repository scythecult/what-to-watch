import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FILTER, StoreName } from '../const';

export type FilterState = {
  currentFilter: typeof DEFAULT_FILTER | string;
};

const initialState: FilterState = {
  currentFilter: DEFAULT_FILTER,
};

export const filterSlice = createSlice({
  name: StoreName.Filters,
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
