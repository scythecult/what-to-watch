import { createErrorInfo } from '../../utils/mocks';
import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { appErrorInfoSelector } from './selectors';

describe('AppSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
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
