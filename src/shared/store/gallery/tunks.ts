import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from 'shared/config/api';
import { RootState } from '../store';
import { BASIC_BREED_FILTER, FeedItem } from './reducer';

type BreedPayload = {
	id: string;
	name: string;
};

type FeedPayload = {
	id: string;
	url: string;
	breeds: BreedPayload[];
};

type VotesPayload = {
	image_id: string;
	value: number;
};

type FavPayload = {
	image_id: string;
	id: number;
};

const getFeedRequestUrl = (
	filterBreed: string,
	filterLimit: string,
	filterOrder: string,
	filterType: string,
	page: number,
) => {
	const appliedFilterBreed =
		filterBreed === BASIC_BREED_FILTER.value ? '' : `breed_ids=${filterBreed}`;
	const appliedFilterLimit = `limit=${filterLimit}`;
	const appliedFilterOrder = filterOrder === 'RANDOM' ? '' : `order=${filterOrder}`;
	const appliedPage = filterOrder === 'RANDOM' ? '' : `page=${page}`;
	let appliedFilterType = '';

	if (filterType === 'ANIMATED') appliedFilterType = 'mime_types=gif';
	else if (filterType === 'STATIC') appliedFilterType = 'mime_types=jpg,png';

	const appliedFilters = [appliedFilterBreed, appliedFilterOrder, appliedPage, appliedFilterType]
		.filter((item) => item !== '')
		.join('&');

	const request = `https://api.thecatapi.com/v1/images/search?${appliedFilterLimit}${
		appliedFilters.length > 0 ? '&' : ''
	}${appliedFilters}`;

	return request;
};

export const fetchBreedList = createAsyncThunk('gallery/breeds', async () => {
	const response = await fetch('https://api.thecatapi.com/v1/breeds', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	});

	return response.json();
});

export const fetchGalleryFeed = createAsyncThunk('gallery/feed', async (_, { getState }) => {
	const { filterBreed, filterLimit, filterOrder, filterType } = (getState() as RootState)
		.galleryReducer;

	const feedPayload: FeedPayload[] = await (
		await fetch(
			getFeedRequestUrl(
				filterBreed.value,
				filterLimit.value,
				filterOrder.value,
				filterType.value,
				0,
			),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
			},
		)
	).json();

	const votesPayload: VotesPayload[] = await (
		await fetch('https://api.thecatapi.com/v1/votes', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		})
	).json();

	const favPayload: FavPayload[] = await (
		await fetch('https://api.thecatapi.com/v1/favourites', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		})
	).json();

	const feed: FeedItem[] = feedPayload.map((item) => {
		return {
			breedId: item.breeds.length > 0 ? item.breeds[0].id : undefined,
			breedName: item.breeds.length > 0 ? item.breeds[0].name : undefined,
			imgId: item.id,
			imgUrl: item.url,
			isFav: false,
			isLiked: votesPayload.some((a) => a.image_id === item.id && a.value === 1),
			isDisliked: votesPayload.some((a) => a.image_id === item.id && a.value === -1),
			favId: favPayload.find((a) => a.image_id === item.id)?.id,
		};
	});

	return feed;
});

export const fetchUpdateGalleryFeed = createAsyncThunk(
	'gallery/update',
	async (_, { getState }) => {
		const { filterBreed, filterLimit, filterOrder, filterType, page } = (getState() as RootState)
			.galleryReducer;

		const feedPayload: FeedPayload[] = await (
			await fetch(
				getFeedRequestUrl(
					filterBreed.value,
					filterLimit.value,
					filterOrder.value,
					filterType.value,
					page,
				),
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': apiKey,
					},
				},
			)
		).json();

		const votesPayload: VotesPayload[] = await (
			await fetch('https://api.thecatapi.com/v1/votes', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
			})
		).json();

		const favPayload: FavPayload[] = await (
			await fetch('https://api.thecatapi.com/v1/favourites', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
			})
		).json();

		const feed: FeedItem[] = feedPayload.map((item) => {
			return {
				breedId: item.breeds.length > 0 ? item.breeds[0].id : undefined,
				breedName: item.breeds.length > 0 ? item.breeds[0].name : undefined,
				imgId: item.id,
				imgUrl: item.url,
				isFav: false,
				isLiked: votesPayload.some((a) => a.image_id === item.id && a.value === 1),
				isDisliked: votesPayload.some((a) => a.image_id === item.id && a.value === -1),
				favId: favPayload.find((a) => a.image_id === item.id)?.id,
			};
		});

		return feed;
	},
);
