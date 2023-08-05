import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { Search } from '../slices/searchSlice';
import userReducer, { User } from '../slices/userSlice';

export interface State {
  search: Search;
  user: User;
}

// reducers
export const reducers = {
  search: searchReducer,
  user: userReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
