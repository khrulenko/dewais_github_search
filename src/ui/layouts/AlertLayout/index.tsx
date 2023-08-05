import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

interface AlertPageLayoutProps {
  children: string | ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

const AlertPageLayout = ({
  children,
  action,
  icon = <SentimentVeryDissatisfiedIcon fontSize="large" />,
}: AlertPageLayoutProps) => (
  <Stack alignItems="center" gap="8px">
    {icon}

    <Typography fontWeight="bold" textAlign="center">
      {children}
    </Typography>

    {action}
  </Stack>
);
export default AlertPageLayout;
