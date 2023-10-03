import { RootState } from '../store';

export const isAsideOpenSelector = (state: RootState) => state.asideReducer.isOpen;
