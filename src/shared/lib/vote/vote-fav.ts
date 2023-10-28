import { apiKey } from 'shared/config/api';

export const voteFav = async (imageId: string) => {
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
};
