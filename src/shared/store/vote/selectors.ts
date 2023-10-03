import { RootState } from '../store';

export const voteImageIdSelector = (state: RootState) => state.voteReducer.imageId;

export const voteImageUrlSelector = (state: RootState) => state.voteReducer.imageUrl;
