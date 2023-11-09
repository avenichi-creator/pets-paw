import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterLimitOptions } from 'features/filter-limit';
import { FilterOrderOptions } from 'features/filter-order';
import { FilterTypeOptions } from 'features/filter-type';
import { SelectListItem } from 'shared/ui/select';
import { fetchBreedList, fetchGalleryFeed, fetchUpdateGalleryFeed } from './tunks';

type BreedPayload = {
	id: string;
	name: string;
};

export type FeedItem = {
	breedName: string | undefined;
	breedId: string | undefined;
	imgId: string;
	imgUrl: string;
	isLiked: boolean;
	isDisliked: boolean;
	voteId?: number;
	favId: number | undefined;
};

interface InitialState {
	isLoading: boolean;
	error: string;
	filterOrder: SelectListItem;
	filterType: SelectListItem;
	filterBreed: SelectListItem;
	filterLimit: SelectListItem;
	breedList: SelectListItem[];
	page: number;
	feed: FeedItem[];
}

export const BASIC_BREED_FILTER: SelectListItem = {
	value: 'all',
	label: 'All breeds',
};
const BASIC_BREED_LIST: SelectListItem[] = [BASIC_BREED_FILTER];

const initialState: InitialState = {
	isLoading: false,
	error: '',
	filterOrder: FilterOrderOptions[0],
	filterType: FilterTypeOptions[0],
	filterBreed: BASIC_BREED_FILTER,
	filterLimit: FilterLimitOptions[0],
	breedList: BASIC_BREED_LIST,
	page: 0,
	feed: [],
};

const gallerySlice = createSlice({
	name: 'gallery',
	initialState,
	reducers: {
		setFilterOrder: {
			reducer: (state, action: PayloadAction<SelectListItem>) => {
				state.filterOrder = action.payload;
			},
			prepare: (value: SelectListItem) => {
				return { payload: value };
			},
		},
		setFilterType: {
			reducer: (state, action: PayloadAction<SelectListItem>) => {
				state.filterType = action.payload;
			},
			prepare: (value: SelectListItem) => {
				return { payload: value };
			},
		},
		setFilterBreed: {
			reducer: (state, action: PayloadAction<SelectListItem>) => {
				state.filterBreed = action.payload;
			},
			prepare: (value: SelectListItem) => {
				return { payload: value };
			},
		},
		setFilterLimit: {
			reducer: (state, action: PayloadAction<SelectListItem>) => {
				state.filterLimit = action.payload;
			},
			prepare: (value: SelectListItem) => {
				return { payload: value };
			},
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchGalleryFeed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGalleryFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.page = 1;
				state.feed = action.payload;
			})
			.addCase(fetchGalleryFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});

		builder
			.addCase(fetchUpdateGalleryFeed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUpdateGalleryFeed.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.page = state.page + 1;
				state.feed = state.feed.concat(action.payload);
			})
			.addCase(fetchUpdateGalleryFeed.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || '';
			});

		builder.addCase(fetchBreedList.fulfilled, (state, action) => {
			const payload: BreedPayload[] = action.payload;

			state.breedList = BASIC_BREED_LIST.concat(
				payload.map((item) => ({ value: item.id, label: item.name })),
			);
		});
	},
});

export const { setFilterBreed, setFilterLimit, setFilterOrder, setFilterType } =
	gallerySlice.actions;
export default gallerySlice.reducer;
