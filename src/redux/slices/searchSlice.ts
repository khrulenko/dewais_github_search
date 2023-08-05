import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchUsersByLogin } from '../../common/api';
import { createSelector } from '../../common/utils';

export interface SearchResultItem {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

interface SearchUsersResult {
  total_count: number;
  incomplete_results: boolean;
  items: SearchResultItem[];
}

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
