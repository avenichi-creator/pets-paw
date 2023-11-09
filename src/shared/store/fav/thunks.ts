import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from 'shared/config/api';
import { RootState } from '../store';
import { FeedItem } from './reducer';

interface FavPayload {
	id: number;
	image: {
		id: string;
		url: string;
	};
}

const getFav = async (page: number): Promise<FavPayload[]> => {
	const response: FavPayload[] = await fetch(
		`https://api.thecatapi.com/v1/favourites?order=DESC&limit=5&page=${page}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		},
	).then((data) => data.json());

	return response;
};

export const fetchInitialFavFeed = createAsyncThunk('fav/initial-feed', async () => {
	const favPayload: FavPayload[] = await getFav(0);

	const feed: FeedItem[] = favPayload.map((item) => {
		return {
			imgId: item.image.id,
			imgUrl: item.image.url,
			favId: item.id,
		};
	});

	return feed;
});

export const fetchUpdateFavFeed = createAsyncThunk('fav/update-feed', async (_, { getState }) => {
	const { page } = (getState() as RootState).favReducer;

	const favPayload: FavPayload[] = await getFav(page);

	const feed: FeedItem[] = favPayload.map((item) => {
		return {
			imgId: item.image.id,
			imgUrl: item.image.url,
			favId: item.id,
		};
	});

	return feed;
});
