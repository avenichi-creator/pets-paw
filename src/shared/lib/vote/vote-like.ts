import { apiKey } from 'shared/config/api';

export const voteLike = async (imageId: string) => {
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
};
