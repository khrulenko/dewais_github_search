import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Stack, styled, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { URL_SEARCH } from '../../../../routing/URLs';
import { createUserAvatarStyles, createUserNameStyles } from './styles';

interface Props {
  name?: string | null;
  login?: string;
  id?: number;
  avatarUrl?: string;
}

const UserAvatar = styled(Avatar)(createUserAvatarStyles);
const UserName = styled(Typography)(createUserNameStyles);

const UserPageHeader = ({ name, login, id, avatarUrl }: Props) => {
  const navigate = useNavigate();

  const goToSearchPage = () => navigate(URL_SEARCH);

  return (
    <Stack>
      <Button startIcon={<ArrowBackIcon />} onClick={goToSearchPage}>
        Back to search
      </Button>

      <Stack direction="row" alignItems="center" gap="16px">
        <UserAvatar alt={`${login}'s avatar`} src={avatarUrl} />

        <Stack>
          <UserName>{name}</UserName>

          <Typography>{login}</Typography>
          <Typography>id: {id}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UserPageHeader;
