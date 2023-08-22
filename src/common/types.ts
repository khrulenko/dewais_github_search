import { CSSObject, Theme } from '@mui/material';
import store from '../redux/store';

export type AppDispatch = typeof store.dispatch;
export type OwnerStateWithTheme<T> = { theme: Theme } & { ownerState: T };
export type StyleFunction<T> = (arg: { theme: Theme } & T) => CSSObject;
export type StringObject = Record<string, string>;
