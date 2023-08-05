import { createAsyncThunk } from '@reduxjs/toolkit';
import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const searchUsersByLogin = createAsyncThunk(
  'search/searchUsers',
  async (query: string) => {
    try {
      const usersResponse = await octokit.rest.search.users({
        q: query,
        per_page: 50,
      });

      return usersResponse.data;
    } catch (error) {
      throw new Error();
    }
  }
);

const fetchUserData = createAsyncThunk(
  'search/fetchUserData',
  async (username: string) => {
    try {
      const usersResponse = await octokit.rest.users.getByUsername({
        username,
      });

      return usersResponse.data;
    } catch (error) {
      throw new Error();
    }
  }
);

export { searchUsersByLogin, fetchUserData };
