import { useSelector } from 'react-redux';
import { LinearProgress, Stack } from '@mui/material';
import { getSearch } from '../../../redux/slices/searchSlice';
import SearchBar from '../../components/SearchBar';
import Tittle from '../../components/Tittle';
import UsersList from '../../components/UsersList';
import HintText from '../../components/HintText';
import NoUsersFoundAlert from '../../components/NoUsersFoundAlert';

const SearchPage = () => {
  const { searchResults, wasRespondEmpty, isLoading, error } =
    useSelector(getSearch);
  const areFoundUsers = Boolean(searchResults.length);
  const alert = wasRespondEmpty ? <NoUsersFoundAlert /> : <HintText />;
  const content = areFoundUsers ? <UsersList users={searchResults} /> : alert;

  return (
    <Stack gap="24px">
      <Tittle>GitHub users search</Tittle>

      <SearchBar />

      {isLoading ? <LinearProgress color="secondary" /> : content}
    </Stack>
  );
};

export default SearchPage;
