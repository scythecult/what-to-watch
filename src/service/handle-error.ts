import { setError } from '../store/app-slice/app-slice';
import { store } from '../store/store';
import { ErrorInfo } from '../types';

export const handleError = (errorInfo: ErrorInfo) => {
  store.dispatch(setError(errorInfo));
};
