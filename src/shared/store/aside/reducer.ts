import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	isOpen: boolean;
}

const initialState: InitialState = {
	isOpen: false,
};

const asideSlice = createSlice({
	name: 'aside',
	initialState,
	reducers: {
		setAsideOpen(state) {
			state.isOpen = true;
		},
		setAsideClose(state) {
			state.isOpen = false;
		},
	},
});

export const { setAsideOpen, setAsideClose } = asideSlice.actions;

export default asideSlice.reducer;
