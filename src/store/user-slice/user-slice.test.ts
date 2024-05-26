import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { userSlice } from './user-slice';

describe('UserSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
  });

  it('Should return initial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.User];
    const action = { type: '' };

    const result = userSlice.reducer(undefined, action);

    expect(result).toEqual(initialState);
  });
});
