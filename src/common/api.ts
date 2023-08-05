import { createAsyncThunk } from '@reduxjs/toolkit';
import { Octokit } from '@octokit/rest';
import {
  GetResponseDataTypeFromEndpointMethod,
  RequestInterface,
  RequestParameters,
} from '@octokit/types';

export const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const fetchData = async <T extends RequestInterface>(
  method: GetResponseDataTypeFromEndpointMethod<T>,
  params: RequestParameters
) => {
  try {
    const usersResponse = await method(params);

    return usersResponse.data;
  } catch (error) {
    throw new Error();
  }
};

const searchUsersByLogin = createAsyncThunk(
  'search/searchUsers',
  (query: string) =>
    fetchData(octokit.rest.search.users, {
      q: query,
      per_page: 50,
    })
);

const fetchUserData = createAsyncThunk(
  'search/searchUsers',
  (username: string) =>
    fetchData(octokit.rest.users.getByUsername, {
      username,
    })
);

export { searchUsersByLogin, fetchUserData };
