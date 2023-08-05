import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Divider, Link, Paper, Stack, styled } from '@mui/material';
import { fetchUserData } from '../../../common/api';
import { AppDispatch } from '../../../common/types';
import { getUser } from '../../../redux/slices/userSlice';
import { createWrapperStyles } from './styles';
import Section from './Section';
import UserPageHeader from './UserPageHeader';

const Wrapper = styled(Paper)(createWrapperStyles);

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const userName = queryParams.get('login');
  const { userData } = useSelector(getUser);
  const { login, id, name, avatar_url, bio, html_url } = userData || {};

  useEffect(() => {
    if (!userName) return;

    dispatch(fetchUserData(userName));
  }, []);

  return (
    <Wrapper>
      <UserPageHeader
        name={name}
        login={login}
        id={id}
        avatarUrl={avatar_url}
      />

      <Divider />

      <Stack gap="8px">
        {bio && <Section tittle="Bio">{bio}</Section>}

        {html_url && (
          <Section tittle="GitHub profile link">
            <Link href={html_url} target="_blank">
              {html_url}
            </Link>
          </Section>
        )}
      </Stack>
    </Wrapper>
  );
};

export default UserPage;
