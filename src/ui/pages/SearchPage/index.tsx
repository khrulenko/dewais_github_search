import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { getSearch, SearchResultItem } from '../../../redux/slices/searchSlice';
import SearchBar from '../../components/SearchBar';
import Tittle from '../../components/Tittle';

const SearchPage = () => {
  const { searchResults, error } = useSelector(getSearch);

  return (
    <Stack gap="16px">
      <Tittle>GitHub users search</Tittle>

      <SearchBar />
    </Stack>
  );
};

export default SearchPage;
