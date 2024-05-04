import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, AuthStatusValue } from '../../const';
import { StoreName } from '../const';
import { checkAuthStatus } from '../async-actions';

export type UserState = {
  authorizationStatus: AuthStatusValue;
  email: string;
};

const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
  email: '',
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
  },
});
