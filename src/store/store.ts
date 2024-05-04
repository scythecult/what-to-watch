import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createApi } from '../service/api';

export const fetchData = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchData,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
