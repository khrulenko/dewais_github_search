import { Stack, styled } from '@mui/material';
import { SearchResultItem } from '../../../redux/slices/searchSlice';
import UserCard from '../UserCard';
import { createWrapperStyles } from './styles';

interface Props {
  users: SearchResultItem[];
}

const Wrapper = styled(Stack)(createWrapperStyles);

const UsersList = ({ users }: Props) => {
  return (
    <Wrapper>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

export default UsersList;
