import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { getSearch } from '../../../redux/slices/searchSlice';
import SearchBar from '../../components/SearchBar';
import Tittle from '../../components/Tittle';
import UsersList from '../../components/UsersList';
import HintText from '../../components/HintText';
import NoUsersFoundAlert from '../../components/NoUsersFoundAlert';

const SearchPage = () => {
  const { searchResults, wasRespondEmpty, error } = useSelector(getSearch);
  const areFoundUsers = Boolean(searchResults.length);
  const alert = wasRespondEmpty ? <NoUsersFoundAlert /> : <HintText />;

  return (
    <Stack gap="24px">
      <Tittle>GitHub users search</Tittle>

      <SearchBar />

      {areFoundUsers ? <UsersList users={searchResults} /> : alert}
    </Stack>
  );
};

export default SearchPage;
