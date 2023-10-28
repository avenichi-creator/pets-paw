import { apiKey } from 'shared/config/api';

export const uploadImage = async (file: File, loadingEndCallback: () => void) => {
	const fd = new FormData();
	fd.append('file', file);

	const response = await fetch('https://api.thecatapi.com/v1/images/upload', {
		method: 'POST',
		headers: {
			'x-api-key': apiKey,
		},
		body: fd,
	}).then((res) => {
		loadingEndCallback();

		return res.ok;
	});

	return response;
};
