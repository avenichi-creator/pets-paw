import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/reducer';

const store = configureStore({
	reducer: { themeReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
