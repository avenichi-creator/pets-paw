import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomImage, fetchVoteDislike, fetchVoteFav, fetchVoteLike } from './thunks';

interface Image {
	breeds: string[];
	id: string;
	url: string;
	width: number;
	height: number;
}

interface InitialState {
	imageId: string;
	imageUrl: string;
	isLoading: boolean;
	error: string;
}

const initialState: InitialState = {
	imageId: '',
	imageUrl: '',
	isLoading: false,
	error: '',
};

const voteSlice = createSlice({
	name: 'vote',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchVoteLike.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchVoteLike.fulfilled, (state) => {
				state.isLoading = false;
				state.error = '';
			})
			.addCase(fetchVoteLike.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});

		builder
			.addCase(fetchVoteDislike.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchVoteDislike.fulfilled, (state) => {
				state.isLoading = false;
				state.error = '';
			})
			.addCase(fetchVoteDislike.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});

		builder
			.addCase(fetchVoteFav.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchVoteFav.fulfilled, (state) => {
				state.isLoading = false;
				state.error = '';
			})
			.addCase(fetchVoteFav.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});

		builder
			.addCase(fetchRandomImage.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchRandomImage.fulfilled, (state, action) => {
				const payload: Image[] = action.payload;

				state.isLoading = false;
				state.imageId = payload[0].id;
				state.imageUrl = payload[0].url;
				state.error = '';
			})
			.addCase(fetchRandomImage.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});
	},
});

export default voteSlice.reducer;
