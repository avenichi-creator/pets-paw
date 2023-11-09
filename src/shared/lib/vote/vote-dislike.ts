import { apiKey } from 'shared/config/api';

interface VoteDislikePayload {
	id: number;
}

export const voteDislike = async (imageId: string): Promise<VoteDislikePayload> => {
	const response: VoteDislikePayload = await fetch('https://api.thecatapi.com/v1/votes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
		body: JSON.stringify({
			image_id: imageId,
			value: -1,
		}),
	}).then((data) => data.json());

	return response;
};
