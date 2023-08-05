import { Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AlertPageLayout from '../../layouts/AlertLayout';

const SearchErrorAlert = () => {
  const reload = () => window.location.reload();

  const actionButton = (
    <Button onClick={reload} variant="contained">
      Reload
    </Button>
  );

  const icon = <SentimentVeryDissatisfiedIcon fontSize="large" />;

  return (
    <AlertPageLayout icon={icon} action={actionButton}>
      oops, something went wrong,
      <br />
      try reloading the page using the button below
    </AlertPageLayout>
  );
};

export default SearchErrorAlert;
