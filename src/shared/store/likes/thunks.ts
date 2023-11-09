import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from 'shared/config/api';
import { FeedItem } from './reducer';

interface VotesPayload {
	id: number;
	value: number;
	image: {
		id: string;
		url: string;
	};
}

export const fetchInitialLikesFeed = createAsyncThunk('likes/initial-feed', async () => {
	const votesPayload: VotesPayload[] = await fetch(
		'https://api.thecatapi.com/v1/votes?order=DESC',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		},
	).then((data) => data.json());

	const feed: FeedItem[] = votesPayload
		.filter((item) => item.value === 1)
		.map((item) => {
			return {
				imgId: item.image.id,
				imgUrl: item.image.url,
				isLiked: true,
				voteId: item.id,
			};
		});

	return feed;
});
