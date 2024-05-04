import axios, { AxiosError, AxiosInstance } from 'axios';
import { BASE_API_URL, REQUEST_TIMEOUT } from '../const';
import { ErrorInfo } from '../types';
import { handleError } from './handle-error';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    // логика по извлечению токена из ЛС
    // и добавления его в запрос
    // eslint-disable-next-line no-console
    console.log('config', config);

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        const errorInfo: ErrorInfo = {
          serverMessage: error.message,
          responseMessage: error.response.data.message,
        };

        handleError(errorInfo);
      }
    }
  );

  return api;
};
