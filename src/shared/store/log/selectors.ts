import { RootState } from '../store';

export const logSelector = (state: RootState) => state.logReducer.logData;
