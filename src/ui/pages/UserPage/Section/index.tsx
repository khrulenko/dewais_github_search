import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

interface Props {
  tittle: string;
  children: ReactNode | string;
}

const Section = ({ tittle, children }: Props) => {
  return (
    <Stack>
      <Typography variant="h5" fontWeight="bold">
        {tittle}
      </Typography>

      <Typography>{children}</Typography>
    </Stack>
  );
};

export default Section;
