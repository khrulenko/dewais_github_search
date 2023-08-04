import { Typography } from '@mui/material';

interface Props {
  children: string;
}

const Tittle = ({ children }: Props) => {
  return (
    <Typography align="center" variant="h2" fontWeight="bold">
      {children}
    </Typography>
  );
};

export default Tittle;
