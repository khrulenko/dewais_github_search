import { PaperProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { palette },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',

  width: '240px',
  height: '64px',
  padding: '16px',

  borderRadius: '16px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: palette.secondary.dark,
    color: palette.primary.light,
  },
});

const createUserNameStyles: StyleFunction<TypographyProps> = () => ({
  width: '148px',

  fontSize: '18px',
  fontWeight: 'bold',
});

export { createWrapperStyles, createUserNameStyles };
