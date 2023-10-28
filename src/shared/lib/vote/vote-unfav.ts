import { apiKey } from 'shared/config/api';

export const voteUnfav = async (favId: number) => {
	const response = await fetch(`https://api.thecatapi.com/v1/favourites/${favId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	});

	return response.json();
};
