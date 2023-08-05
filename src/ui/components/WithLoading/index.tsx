import { ReactNode } from 'react';
import { LinearProgress, Skeleton } from '@mui/material';

interface Props {
  isLoading: boolean;
  linear?: boolean;
  children: ReactNode;
}

const WithLoading = ({ isLoading, linear = false, children }: Props) => {
  const loader = linear ? <LinearProgress color="secondary" /> : <Skeleton />;

  return <>{isLoading ? loader : children}</>;
};

export default WithLoading;
