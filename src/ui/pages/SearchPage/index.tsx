import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { getSearch } from '../../../redux/slices/searchSlice';
import SearchBar from '../../components/SearchBar';
import Tittle from '../../components/Tittle';
import UsersList from '../../components/UsersList';
import HintText from '../../components/HintText';

const SearchPage = () => {
  const { searchResults, error } = useSelector(getSearch);
  const areFoundUsers = Boolean(searchResults.length);

  return (
    <Stack gap="24px">
      <Tittle>GitHub users search</Tittle>

      <SearchBar />

      {areFoundUsers ? <UsersList users={searchResults} /> : <HintText />}
    </Stack>
  );
};

export default SearchPage;
