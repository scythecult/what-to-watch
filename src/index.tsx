import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { mockFilms } from './mocks/films';
import { mockPromo } from './mocks/promo';
import { mockDetails } from './mocks/details';
import { mockSimiliarFilms } from './mocks/similiar-films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      mockFilms={mockFilms}
      mockPromoFilm={mockPromo}
      mockFilmDetails={mockDetails}
      mockSimiliarFilms={mockSimiliarFilms}
    />
  </React.StrictMode>
);
