import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { filterSlice } from './filter-slice';
import { filterSelector } from './selectors';

describe('FiltersSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
  });

  it('Should return initial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.Filters];
    const action = { type: '' };

    const result = filterSlice.reducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('Should return selected filter', () => {
    const state = store.getState();
    const filterStoreSlice = { ...state[StoreName.Filters] };
    const EXPECTED_FILTER = 'Pop';

    filterStoreSlice.currentFilter = EXPECTED_FILTER;

    const result = filterSelector({ [StoreName.Filters]: filterStoreSlice });

    expect(result).toBe(EXPECTED_FILTER);
  });
});
