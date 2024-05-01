import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { mockFilms } from './mocks/films';
import { mockDetails } from './mocks/details';
import { mockSimiliarFilms } from './mocks/similiar-films';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        mockFilms={mockFilms}
        mockFilmDetails={mockDetails}
        mockSimiliarFilms={mockSimiliarFilms}
      />
    </Provider>
  </React.StrictMode>
);
