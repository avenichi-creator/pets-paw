import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from 'shared/config/api';
import { FeedItem } from './reducer';

interface SearchPayload {
	id: string;
	name: string;
	image: {
		id: string;
		url: string;
	};
}

export const fetchInitialSearchFeed = createAsyncThunk(
	'search/initial-feed',
	async (breedName: string) => {
		const searchPayload: SearchPayload[] = await fetch(
			`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
			},
		).then((data) => data.json());

		const feed: FeedItem[] = searchPayload.map((item) => {
			return {
				breedId: item.id,
				breedName: item.name,
				imgId: item.image.id,
				imgUrl: item.image.url,
			};
		});

		return feed;
	},
);
