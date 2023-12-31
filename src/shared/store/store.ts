import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './aside/reducer';
import dislikesReducer from './dislikes/reducer';
import favReducer from './fav/reducer';
import galleryReducer from './gallery/reducer';
import likesReducer from './likes/reducer';
import logReducer from './log/reducer';
import searchReducer from './search/reducer';
import themeReducer from './theme/reducer';
import uploadReducer from './upload/reducer';
import voteReducer from './vote/reducer';

const store = configureStore({
	reducer: {
		asideReducer,
		dislikesReducer,
		favReducer,
		galleryReducer,
		likesReducer,
		logReducer,
		searchReducer,
		themeReducer,
		uploadReducer,
		voteReducer,
	},
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
