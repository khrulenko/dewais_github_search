import { createAsyncThunk } from '@reduxjs/toolkit';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

// @
// APIs allow to make up to 60 requests per hour
// to be able to make up to 5000 requests, follow the instructions below:
// 1. Create a GitHub token on your GitHub profile
// 2. Create an ".env" file in the repository root
// 3. Add the token to the ".env" file using "REACT_APP_GITHUB_TOKEN" name
// 4. Uncomment "config" const below
// 5. Add "config" const as a second argument
//    to the fetch function call into "fetchData" function
// @

// const config = {
//   headers: {
//     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//   },
// };

const fetchData = async (api: string) => {
  try {
    const dataResponse = await fetch(api);

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
