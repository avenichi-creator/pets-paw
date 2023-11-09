import { createSlice } from '@reduxjs/toolkit';
import { fetchInitialFavFeed, fetchUpdateFavFeed } from './thunks';

export type FeedItem = {
	imgId: string;
	imgUrl: string;
	favId: number;
};

interface InitialState {
	isLoading: boolean;
	error: string;
	page: number;
	feed: FeedItem[];
}

const initialState: InitialState = {
	isLoading: false,
	error: '',
	page: 0,
	feed: [],
};

const favSlice = createSlice({
	name: 'fav',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchInitialFavFeed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchInitialFavFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.page = 1;
				state.feed = action.payload;
			})
			.addCase(fetchInitialFavFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});

		builder
			.addCase(fetchUpdateFavFeed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUpdateFavFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.page = state.page + 1;
				state.feed = state.feed.concat(action.payload);
			})
			.addCase(fetchUpdateFavFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});
	},
});

export default favSlice.reducer;
