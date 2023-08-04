import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { Search } from '../slices/searchSlice';

export interface State {
  search: Search;
}

// redusers
export const reducers = {
  search: searchReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
