import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUserData } from '../../../common/api';
import { AppDispatch } from '../../../common/types';
import { getUser } from '../../../redux/slices/userSlice';

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const userName = queryParams.get('login');
  const { userData } = useSelector(getUser);

  useEffect(() => {
    if (!userName) return;

    dispatch(fetchUserData(userName));
  }, []);

  return (
    <>
      <div>{userData?.login}</div>
      <div>{userData?.id}</div>
      <div>{userData?.name}</div>
    </>
  );
};

export default UserPage;
