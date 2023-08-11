import { createAsyncThunk } from '@reduxjs/toolkit';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const config = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
};

const fetchData = async (api: string) => {
  try {
    const dataResponse = await fetch(api, config);

    if (!dataResponse.ok) {
      throw new Error();
    }

    const data = await dataResponse.json();

    return data;
  } catch (error) {
    throw new Error();
  }
};

const searchUsersByLogin = createAsyncThunk(
  'search/searchUsers',
  (query: string) =>
    fetchData(
      `https://api.github.com/search/users?q=${query}+in:login&per_page=50`
    )
);

const fetchUserData = createAsyncThunk(
  'search/fetchUserData',
  (username: string) => fetchData(`https://api.github.com/users/${username}`)
);

export { octokit, searchUsersByLogin, fetchUserData };
