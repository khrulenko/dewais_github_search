import { createAsyncThunk } from '@reduxjs/toolkit';

const searchUsersByLogin = createAsyncThunk(
  'search/searchUsers',
  async (query: string) => {
    try {
      const usersResponse = await fetch(
        `https://api.github.com/search/users?q=${query}+in:login&per_page=10`
      );

      if (!usersResponse.ok) {
        throw new Error();
      }

      const usersData = await usersResponse.json();

      return usersData;
    } catch {
      throw new Error();
    }
  }
);

export { searchUsersByLogin };
