import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { URL_SEARCH } from '../../../routing/URLs';
import AlertPageLayout from '../../layouts/AlertLayout';

const UserErrorAlert = () => {
  const navigate = useNavigate();

  const actionButton = (
    <Button onClick={() => navigate(URL_SEARCH)} variant="contained">
      back to the search
    </Button>
  );

  return (
    <AlertPageLayout action={actionButton}>
      oops, something went wrong,
      <br />
      try reloading the page or back to the search using button below
    </AlertPageLayout>
  );
};

export default UserErrorAlert;
