import { apiKey } from 'shared/config/api';

interface voteLikePayload {
	id: number;
}

export const voteLike = async (imageId: string): Promise<voteLikePayload> => {
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
	}).then((data) => data.json());

	return response;
};
