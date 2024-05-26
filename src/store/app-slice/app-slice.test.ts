import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { appErrorSlice } from './app-slice';

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
});
