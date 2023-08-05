import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { getSearch } from '../../../redux/slices/searchSlice';
import SearchBar from '../../components/SearchBar';
import Tittle from '../../components/Tittle';
import UsersList from '../../components/UsersList';
import HintText from '../../components/HintText';
import NoUsersFoundAlert from '../../components/NoUsersFoundAlert';
import WithLoading from '../../components/WithLoading';

const SearchPage = () => {
  const { searchResults, wasRespondEmpty, isLoading } = useSelector(getSearch);
  const areFoundUsers = Boolean(searchResults.length);
  const alert = wasRespondEmpty ? <NoUsersFoundAlert /> : <HintText />;

  return (
    <Stack gap="24px">
      <Tittle>GitHub users search</Tittle>

      <SearchBar />

      <WithLoading isLoading={isLoading} linear>
        {areFoundUsers ? <UsersList users={searchResults} /> : alert}
      </WithLoading>
    </Stack>
  );
};

export default SearchPage;
