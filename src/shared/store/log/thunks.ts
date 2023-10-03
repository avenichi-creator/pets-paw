import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from 'shared/config/api';
import { LogItemData } from './reducer';

interface Image {
	id: string;
	url: string;
}

interface VoteItemPayload {
	id: number;
	image_id: string;
	sub_id: string | null;
	created_at: string;
	value: number;
	country_code: string;
	image: Image;
}

interface FavItemPayload {
	id: number;
	user_id: string;
	image_id: string;
	sub_id: string | null;
	created_at: string;
	image: Image;
}

export const fetchGetFavList = createAsyncThunk('log/fav', async () => {
	const response = await fetch('https://api.thecatapi.com/v1/favourites', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	});

	return response.json();
});

export const fetchGetLogList = createAsyncThunk('log/log', async () => {
	const response = await fetch('https://api.thecatapi.com/v1/votes?limit=10&order=DESC', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	});

	return response.json();
});

export const fetchFullLogList = createAsyncThunk('log/get-log', async () => {
	const votesResponse: VoteItemPayload[] = await fetch(
		'https://api.thecatapi.com/v1/votes?limit=10&order=DESC',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		},
	).then((data) => data.json());

	const favResponse: FavItemPayload[] = await fetch(
		'https://api.thecatapi.com/v1/favourites?limit=10&order=DESC',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		},
	).then((data) => data.json());

	const normalizedVotesData: LogItemData[] = votesResponse.map(
		(item: VoteItemPayload): LogItemData => {
			return {
				createdAt: item.created_at,
				imageId: item.image_id,
				value: item.value,
			};
		},
	);

	const normalizedFavData: LogItemData[] = favResponse.map((item: FavItemPayload): LogItemData => {
		return {
			createdAt: item.created_at,
			imageId: item.image_id,
			value: 0,
		};
	});

	return normalizedVotesData
		.concat(normalizedFavData)
		.sort((a, b) => {
			const aTime = new Date(a.createdAt).getTime();
			const bTime = new Date(b.createdAt).getTime();

			return bTime - aTime;
		})
		.splice(0, 10);
});
