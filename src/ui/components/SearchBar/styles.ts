import { ButtonProps, StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '16px',
});

const createSearchButtonStyles: StyleFunction<ButtonProps> = () => ({
  width: '56px',
  height: '56px',
  borderRadius: '50%',
});

export { createWrapperStyles, createSearchButtonStyles };
