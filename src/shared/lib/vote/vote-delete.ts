import { apiKey } from 'shared/config/api';

export const voteDelete = async (voteId: number) => {
	const response = await fetch(`https://api.thecatapi.com/v1/votes/${voteId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	});

	return response.json();
};
