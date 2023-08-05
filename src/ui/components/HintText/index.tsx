import SwitchAccessShortcutAddRoundedIcon from '@mui/icons-material/SwitchAccessShortcutAddRounded';
import AlertPageLayout from '../../layouts/AlertLayout';

const HintText = () => {
  const icon = (
    <SwitchAccessShortcutAddRoundedIcon
      fontSize="large"
      sx={{ transform: 'scaleX(-1) rotate(-25deg)' }}
    />
  );

  return (
    <AlertPageLayout icon={icon}>
      try to find some GitHub users,
      <br />
      using the search bar above
    </AlertPageLayout>
  );
};

export default HintText;
