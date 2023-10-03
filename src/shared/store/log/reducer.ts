import { createSlice } from '@reduxjs/toolkit';
import { fetchFullLogList } from './thunks';

export interface LogItemData {
	createdAt: string;
	imageId: string;
	value: number;
}

interface InitialState {
	isLoading: boolean;
	logData: LogItemData[];
	error: string;
}

const initialState: InitialState = {
	logData: [],
	isLoading: false,
	error: '',
};

const logSlice = createSlice({
	name: 'log',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchFullLogList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchFullLogList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.logData = action.payload;
				state.error = '';
			})
			.addCase(fetchFullLogList.rejected, (state, action) => {
				state.isLoading = false;
				state.logData = [];
				state.error = action.error.message || '';
			});
	},
});

export default logSlice.reducer;
