import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './aside/reducer';
import galleryReducer from './gallery/reducer';
import logReducer from './log/reducer';
import themeReducer from './theme/reducer';
import uploadReducer from './upload/reducer';
import voteReducer from './vote/reducer';

const store = configureStore({
	reducer: { asideReducer, galleryReducer, logReducer, themeReducer, uploadReducer, voteReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
