import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	theme: 'dark' | 'light';
}

const initialState: InitialState = {
	theme: 'light',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeLight(state) {
			state.theme = 'light';
		},
		setThemeDark(state) {
			state.theme = 'dark';
		},
	},
});

export const { setThemeDark, setThemeLight } = themeSlice.actions;

export default themeSlice.reducer;
