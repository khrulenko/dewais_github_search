import { State } from '../redux/store';

const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

const isObjEmpty = (object: Record<any, any>): boolean =>
  Object.keys(object).length === 0;

export { createSelector, isObjEmpty };
