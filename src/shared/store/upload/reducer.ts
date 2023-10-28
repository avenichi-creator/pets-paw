import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	image: File | undefined;
	imageName: string;
	isOpen: boolean;
}

const initialState: InitialState = {
	image: undefined,
	imageName: '',
	isOpen: false,
};

const uploadSlice = createSlice({
	name: 'upload',
	initialState,
	reducers: {
		handleUploadOpen: (state) => {
			state.isOpen = true;
		},
		handleUploadClose: (state) => {
			state.isOpen = false;
		},
	},
});

export const { handleUploadOpen, handleUploadClose } = uploadSlice.actions;
export default uploadSlice.reducer;
