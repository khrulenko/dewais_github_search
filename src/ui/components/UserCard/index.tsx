import { useNavigate } from 'react-router-dom';
import { Avatar, Paper, Stack, styled, Typography } from '@mui/material';
import { SearchResultItem } from '../../../redux/slices/searchSlice';
import { createUserNameStyles, createWrapperStyles } from './styles';
import { URL_USERS } from '../../../routing/URLs';

interface Props {
  user: SearchResultItem;
}

const Wrapper = styled(Paper)(createWrapperStyles);
const UserName = styled(Typography)(createUserNameStyles);

const UserCard = ({ user }: Props) => {
  const navigate = useNavigate();
  const { login, id, avatar_url } = user;

  const goToUserPage = () => {
    navigate(`${URL_USERS}?login=${login}`);
  };

  return (
    <Wrapper onClick={goToUserPage}>
      <Avatar
        alt={`GitHub avatar of user with ${login} username `}
        src={avatar_url}
      />

      <Stack>
        <UserName noWrap>{login}</UserName>

        <Typography fontSize="small" color="secondary.main">
          id: {id}
        </Typography>
      </Stack>
    </Wrapper>
  );
};

export default UserCard;
