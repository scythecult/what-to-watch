import axios, { AxiosInstance } from 'axios';
import { BASE_API_URL, REQUEST_TIMEOUT } from '../const';

export const createApi = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_API_URL,
    timeout: REQUEST_TIMEOUT,
  });
