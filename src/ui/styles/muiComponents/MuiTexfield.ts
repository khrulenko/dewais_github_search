import { TextFieldProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiTextField = {
  styleOverrides: {
    root: ({
      theme: {
        palette: { divider, common },
        spacing,
      },
    }: OwnerStateWithTheme<TextFieldProps>) => ({
      maxWidth: '500px',

      '& .MuiOutlinedInput-root': {
        borderRadius: spacing(4),
      },
      '& .MuiOutlinedInput-input': {
        borderRadius: spacing(4),
        backgroundColor: common.white,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: common.white,
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: divider,
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: divider,
      },
    }),
  },
};

export default MuiTextField;
