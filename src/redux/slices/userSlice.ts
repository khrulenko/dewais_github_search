import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import { fetchUserData, octokit } from '../../common/api';
import { createSelector } from '../../common/utils';

export type UserData = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.users.getByUsername
>;

export interface User {
  userData: UserData | null;
  error: boolean;
  isLoading: boolean;
}

const initialState: User = {
  userData: null,
  error: false,
  isLoading: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state: User) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUserData.fulfilled,
        (state: User, action: PayloadAction<UserData>) => {
          state.userData = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchUserData.rejected, (state: User) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const getUser = createSelector('user');
export default user.reducer;
