import { createAsyncThunk } from '@reduxjs/toolkit';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const searchUsersByLogin = createAsyncThunk(
  'search/searchUsers',
  async (query: string) => {
    try {
      const usersResponse = await octokit.rest.search.users({
        q: query,
        per_page: 10,
      });

      return usersResponse.data;
    } catch (error) {
      throw new Error();
    }
  }
);

export { searchUsersByLogin };
