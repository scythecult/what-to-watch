import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { mockFilms } from './mocks/films';
import { mockSimiliarFilms } from './mocks/similiar-films';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  checkAuthStatus,
  loadFilms,
  loadPromoFilm,
} from './store/async-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadFilms());
store.dispatch(loadPromoFilm());
store.dispatch(checkAuthStatus());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mockFilms={mockFilms} mockSimiliarFilms={mockSimiliarFilms} />
    </Provider>
  </React.StrictMode>
);
