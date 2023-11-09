import { createSlice } from '@reduxjs/toolkit';
import { fetchInitialDislikesFeed } from './thunks';

export type FeedItem = {
	imgId: string;
	imgUrl: string;
	isDisliked: boolean;
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

const dislikesSlice = createSlice({
	name: 'dislikes',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchInitialDislikesFeed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchInitialDislikesFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.feed = action.payload;
			})
			.addCase(fetchInitialDislikesFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});
	},
});

export default dislikesSlice.reducer;
