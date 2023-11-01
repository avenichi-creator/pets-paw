import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom';
import { Routes } from 'shared/config/routes';

interface BreedData {
	breeds: {
		name: string;
		description: string;
		temperament: string;
		origin: string;
		life_span: string;
		weight: {
			metric: string;
		};
	}[];
	url: string;
}

export interface BreedInfo {
	breedImageUrls: string[];
	breedName: string;
	breedDescription: string;
	breedTemperament: string;
	breedOrigin: string;
	breedLifeSpan: string;
	breedWeight: string;
}

interface BreedLoaderParams extends ActionFunctionArgs {
	params: Params<ParamParseKey<typeof Routes.breedPage>>;
}

export const BreedLoader = async ({ params }: BreedLoaderParams): Promise<BreedInfo> => {
	const response: BreedData[] = await fetch(
		`https://api.thecatapi.com/v1/images/search?breed_ids=${params.breedId}&limit=5`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': 'live_2806wfYSPNQft2JgmKgYuVVvuRbxyujq8e8UXztCr94ryBA3wUrfwkfkeBFiKumm',
			},
		},
	).then((data) => data.json());

	const breedInfo: BreedInfo = {
		breedName: response[0].breeds[0].name,
		breedDescription: response[0].breeds[0].description,
		breedTemperament: response[0].breeds[0].temperament,
		breedOrigin: response[0].breeds[0].origin,
		breedLifeSpan: response[0].breeds[0].life_span,
		breedWeight: response[0].breeds[0].weight.metric,
		breedImageUrls: response.map((item) => item.url),
	};

	return breedInfo;
};
