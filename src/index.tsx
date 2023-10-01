import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { generateFilms } from './mocks/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mockFilms = generateFilms();

root.render(
  <React.StrictMode>
    <App mockFilms={mockFilms} />
  </React.StrictMode>
);
