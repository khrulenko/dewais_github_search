import { AvatarProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../../common/types';

const createUserAvatarStyles: StyleFunction<AvatarProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  width: '80px',
  height: '80px',

  [down('sm')]: {
    width: '56px',
    height: '56px',
  },
});

const createUserNameStyles: StyleFunction<TypographyProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  fontSize: '32px',
  fontWeight: 'bold',

  [down('sm')]: {
    fontSize: '24px',
  },
});

export { createUserAvatarStyles, createUserNameStyles };
