import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';
import AlertPageLayout from '../../layouts/AlertLayout';

const NoUsersFoundAlert = () => {
  const icon = <NoAccountsOutlinedIcon fontSize="large" />;

  return (
    <AlertPageLayout icon={icon}>
      there are no users with typed username,
      <br />
      try another one
    </AlertPageLayout>
  );
};

export default NoUsersFoundAlert;
