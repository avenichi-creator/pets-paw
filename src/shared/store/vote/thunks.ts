import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from 'shared/config/api';

export const fetchRandomImage = createAsyncThunk('vote/get-random-image', async () => {
	const response = await fetch('https://api.thecatapi.com/v1/images/search', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	});

	return response.json();
});

export const fetchVoteLike = createAsyncThunk('vote/like', async (imageId: string) => {
	const response = await fetch('https://api.thecatapi.com/v1/votes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
		body: JSON.stringify({
			image_id: imageId,
			value: 1,
		}),
	});

	return response.json();
});

export const fetchVoteDislike = createAsyncThunk('vote/dislike', async (imageId: string) => {
	const response = await fetch('https://api.thecatapi.com/v1/votes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
		body: JSON.stringify({
			image_id: imageId,
			value: -1,
		}),
	});

	return response.json();
});

export const fetchVoteFav = createAsyncThunk('vovoteting/fav', async (imageId: string) => {
	const response = await fetch('https://api.thecatapi.com/v1/favourites', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
		body: JSON.stringify({
			image_id: imageId,
		}),
	});

	return response.json();
});
