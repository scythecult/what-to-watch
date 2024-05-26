import { createErrorInfo } from '../../utils/mocks';
import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { appErrorSlice } from './app-slice';
import { appErrorInfoSelector } from './selectors';

describe('AppSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
  });

  it('Should return intial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.AppError];
    const action = { type: '' };

    const result = appErrorSlice.reducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('Should return error info', () => {
    const state = store.getState();
    const appErrorStoreSlice = { ...state[StoreName.AppError] };
    const errorInfo = createErrorInfo();

    appErrorStoreSlice.errorInfo = errorInfo;

    const result = appErrorInfoSelector({
      [StoreName.AppError]: appErrorStoreSlice,
    });

    expect(result).toEqual(errorInfo);
  });
});
