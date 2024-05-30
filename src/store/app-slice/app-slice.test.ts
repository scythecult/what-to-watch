import { createErrorInfo } from '../../utils/mocks';
import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { appErrorSlice, removeError, setError } from './app-slice';

describe('AppSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
  });

  it('Should return intial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.AppError];
    const action = { type: '' };

    const result = appErrorSlice.reducer(undefined, action);

    expect(result).toEqual(initialState);
  });

  it('Should set and return error info', () => {
    const state = store.getState();
    const initialState = state[StoreName.AppError];
    const errorInfo = createErrorInfo();

    const result = appErrorSlice.reducer(initialState, setError(errorInfo));

    expect(result.errorInfo).toEqual(errorInfo);
  });

  it('Should remove error info', () => {
    const state = store.getState();
    const initialState = state[StoreName.AppError];

    const result = appErrorSlice.reducer(initialState, removeError());

    expect(result.errorInfo).toBe(null);
  });
});
