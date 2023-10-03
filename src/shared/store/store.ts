import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './aside/reducer';
import logReducer from './log/reducer';
import themeReducer from './theme/reducer';
import voteReducer from './vote/reducer';

const store = configureStore({
	reducer: { themeReducer, logReducer, asideReducer, voteReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
