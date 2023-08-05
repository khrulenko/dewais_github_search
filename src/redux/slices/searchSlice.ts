import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import { octokit, searchUsersByLogin } from '../../common/api';
import { createSelector } from '../../common/utils';

type SearchUsersResult = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.search.users
>;

export type SearchResultItem = SearchUsersResult['items'][0];

export interface Search {
  searchResults: SearchResultItem[];
  error: boolean;
  isLoading: boolean;
  wasRespondEmpty: boolean;
}

const initialState: Search = {
  searchResults: [],
  error: false,
  isLoading: false,
  wasRespondEmpty: false,
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUsersByLogin.pending, (state: Search) => {
        state.isLoading = true;
      })
      .addCase(
        searchUsersByLogin.fulfilled,
        (state: Search, action: PayloadAction<SearchUsersResult>) => {
          const { items, total_count } = action.payload;

          state.searchResults = items;
          state.isLoading = false;
          state.wasRespondEmpty = !total_count;
        }
      )
      .addCase(searchUsersByLogin.rejected, (state: Search) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const getSearch = createSelector('search');
export default search.reducer;
