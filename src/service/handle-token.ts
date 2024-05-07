import { USER_TOKEN_STORAGE_NAME } from '../const';

export type UserToken = string;

export const checkLocalStorageExistence = () => {
  if (!window.localStorage) {
    throw new Error('No localStorage detected!');
  }
};

export const setToken = (token: UserToken) => {
  checkLocalStorageExistence();

  window.localStorage.setItem(USER_TOKEN_STORAGE_NAME, token);
};

export const getToken = () => {
  checkLocalStorageExistence();

  return window.localStorage.getItem(USER_TOKEN_STORAGE_NAME) || '';
};

export const dropToken = () => {
  checkLocalStorageExistence();

  window.localStorage.removeItem(USER_TOKEN_STORAGE_NAME);
};
