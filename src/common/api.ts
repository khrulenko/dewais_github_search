import { createAsyncThunk } from '@reduxjs/toolkit';
import { Octokit } from '@octokit/rest';
// import {
//   GetResponseDataTypeFromEndpointMethod,
//   RequestInterface,
//   RequestParameters,
// } from '@octokit/types';

// public rest APIs allow to make up to 60 requests per hour
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

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

// @
// Octokit.js allows to make up to 5000 requests per hour
// to use Octokit requests, follow the instructions below:
// 1. Create a GitHub token on your GitHub profile
// 2. Create a .env file in the repository root
// 3. Add the token to the .env file using REACT_APP_GITHUB_TOKEN name
// 4. Uncomment fetchData, searchUsersByLogin and fetchUserData funcs below
// 5. Uncomment the octokit/types import above
// 6. Comment fetchData, searchUsersByLogin and fetchUserData above
// @

// const fetchData = async <T extends RequestInterface>(
//   method: GetResponseDataTypeFromEndpointMethod<T>,
//   params: RequestParameters
// ) => {
//   try {
//     const usersResponse = await method(params);

//     return usersResponse.data;
//   } catch (error) {
//     throw new Error();
//   }
// };

// const searchUsersByLogin = createAsyncThunk(
//   'search/searchUsers',
//   (query: string) =>
//     fetchData(octokit.rest.search.users, {
//       q: query,
//       per_page: 50,
//     })
// );

// const fetchUserData = createAsyncThunk(
//   'search/fetchUserData',
//   (username: string) =>
//     fetchData(octokit.rest.users.getByUsername, {
//       username,
//     })
// );

export { octokit, searchUsersByLogin, fetchUserData };
