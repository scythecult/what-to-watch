import { AuthStatus } from '../../const';
import { createUserInfo } from '../../utils/mocks';
import { StoreName } from '../const';
import { StoreType, getStore } from '../store';
import { userAuthStatusSelector, userInfoSelector } from './selectors';
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

    const result = userSlice.reducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('Should return user auth status', () => {
    const state = store.getState();
    const userAuthStoreSlice = { ...state[StoreName.User] };
    const authStatus = AuthStatus.Auth;

    userAuthStoreSlice.authorizationStatus = authStatus;

    const result = userAuthStatusSelector({
      [StoreName.User]: userAuthStoreSlice,
    });

    expect(result).toBe(authStatus);
  });

  it('Should return user info', () => {
    const state = store.getState();
    const userAuthStoreSlice = { ...state[StoreName.User] };
    const { avatarUrl, email, token, name } = createUserInfo();
    const expectedInfo = { avatarUrl, email, name };

    userAuthStoreSlice.avatarUrl = avatarUrl;
    userAuthStoreSlice.email = email;
    userAuthStoreSlice.token = token;
    userAuthStoreSlice.name = name;

    const result = userInfoSelector({ [StoreName.User]: userAuthStoreSlice });

    expect(result).toEqual(expectedInfo);
  });
});
