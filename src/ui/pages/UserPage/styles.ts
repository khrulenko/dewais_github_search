import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<PaperProps> = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  width: '100%',
  maxWidth: '600px',
  padding: '24px',
  margin: 'auto',

  borderRadius: '36px',
});

export { createWrapperStyles };
