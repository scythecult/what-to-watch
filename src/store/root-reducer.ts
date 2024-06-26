import { combineReducers } from '@reduxjs/toolkit';
import { StoreName } from './const';
import { filmsSlice } from './films-slice/films-slice';
import { filterSlice } from './filter-slice/filter-slice';
import { userSlice } from './user-slice/user-slice';
import { appErrorSlice } from './app-slice/app-slice';

export const rootReducer = combineReducers({
  [StoreName.Films]: filmsSlice.reducer,
  [StoreName.Filters]: filterSlice.reducer,
  [StoreName.User]: userSlice.reducer,
  [StoreName.AppError]: appErrorSlice.reducer,
});
