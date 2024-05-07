import axios, { AxiosError, AxiosInstance } from 'axios';
import { BASE_API_URL, REQUEST_TIMEOUT } from '../const';
import { ErrorInfo } from '../types';
import { handleError } from './handle-error';
import { getToken } from './handle-token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

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
