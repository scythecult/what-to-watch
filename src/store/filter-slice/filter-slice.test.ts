import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { filterSlice } from './filter-slice';

describe('FiltersSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
  });

  it('Should return initial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.Filters];
    const action = { type: '' };

    const result = filterSlice.reducer(undefined, action);

    expect(result).toEqual(initialState);
  });
});
