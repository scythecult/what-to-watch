import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { filmsSlice } from './films-slice';

describe('FilmsSlice selectors', () => {
  let store: StoreType;

  beforeEach(() => {
    store = getStore();
  });

  it('Should return initial state', () => {
    const state = store.getState();
    const initialState = state[StoreName.Films];
    const action = { type: '' };

    const result = filmsSlice.reducer(undefined, action);

    expect(result).toEqual(initialState);
  });
});
