import { createSlice } from '@reduxjs/toolkit';
import { fetchInitialSearchFeed } from './thunks';

export interface FeedItem {
	imgId: string;
	imgUrl: string;
	breedName: string;
	breedId: string;
}

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

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchInitialSearchFeed.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchInitialSearchFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.feed = action.payload;
			})
			.addCase(fetchInitialSearchFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});
	},
});

export default searchSlice.reducer;
