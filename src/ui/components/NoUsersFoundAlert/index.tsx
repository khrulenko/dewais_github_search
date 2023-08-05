import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';
import AlertPageLayout from '../../layouts/AlertLayout';

const NoUsersFoundAlert = () => {
  const icon = <NoAccountsOutlinedIcon fontSize="large" />;

  return (
    <AlertPageLayout icon={icon}>
      no results found,
      <br />
      try another username
    </AlertPageLayout>
  );
};

export default NoUsersFoundAlert;
