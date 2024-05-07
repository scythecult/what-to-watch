import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, AuthStatusValue } from '../../const';
import { StoreName } from '../const';
import { checkAuthStatus, login } from '../async-actions';

export type UserState = {
  authorizationStatus: AuthStatusValue;
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
};

const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
  name: '',
  email: '',
  avatarUrl: '',
  token: '',
};

export const userSlice = createSlice({
  name: StoreName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(checkAuthStatus.pending, (state) => {
      state.authorizationStatus = AuthStatus.Unknown;
    });
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      const { email } = action.payload;

      state.authorizationStatus = AuthStatus.Auth;
      state.email = email;
    });
    builder.addCase(checkAuthStatus.rejected, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { name, email, avatarUrl, token } = action.payload;

      state.authorizationStatus = AuthStatus.Auth;
      state.name = name;
      state.email = email;
      state.avatarUrl = avatarUrl;
      state.token = token;
    });
  },
});
