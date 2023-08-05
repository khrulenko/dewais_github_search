import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { getSearch } from '../../../redux/slices/searchSlice';
import SearchBar from '../../components/SearchBar';
import Tittle from '../../components/Tittle';
import UsersList from '../../components/UsersList';

const SearchPage = () => {
  const { searchResults, error } = useSelector(getSearch);

  return (
    <Stack gap="24px">
      <Tittle>GitHub users search</Tittle>

      <SearchBar />

      <UsersList users={searchResults} />
    </Stack>
  );
};

export default SearchPage;
