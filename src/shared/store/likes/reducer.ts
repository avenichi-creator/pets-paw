import { createSlice } from '@reduxjs/toolkit';
import { fetchInitialLikesFeed } from './thunks';

export type FeedItem = {
	imgId: string;
	imgUrl: string;
	isLiked: boolean;
	voteId: number;
};

interface InitialState {
	isLoading: boolean;
	error: string;
	feed: FeedItem[];
}

const initialState: InitialState = {
	isLoading: false,
	error: '',
	feed: [],
};

const likesSlice = createSlice({
	name: 'likes',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchInitialLikesFeed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchInitialLikesFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.feed = action.payload;
			})
			.addCase(fetchInitialLikesFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});
	},
});

export default likesSlice.reducer;
