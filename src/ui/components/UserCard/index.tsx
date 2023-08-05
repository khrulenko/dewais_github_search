import { Avatar, Paper, Stack, styled, Typography } from '@mui/material';
import { SearchResultItem } from '../../../redux/slices/searchSlice';
import { createUserNameStyles, createWrapperStyles } from './styles';

interface Props {
  user: SearchResultItem;
}

const Wrapper = styled(Paper)(createWrapperStyles);
const UserName = styled(Typography)(createUserNameStyles);

const UserCard = ({ user }: Props) => {
  return (
    <Wrapper>
      <Avatar
        alt={`GitHub avatar of user with ${user.login} username `}
        src={user.avatar_url}
      />

      <Stack>
        <UserName noWrap>{user.login}</UserName>

        <Typography fontSize="small" color="secondary.main">
          id: {user.id}
        </Typography>
      </Stack>
    </Wrapper>
  );
};

export default UserCard;
