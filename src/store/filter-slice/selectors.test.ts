import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { filterSelector } from './selectors';

describe('FiltersSlice selectors', () => {
  let store: StoreType;

  beforeAll(() => {
    store = getStore();
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
