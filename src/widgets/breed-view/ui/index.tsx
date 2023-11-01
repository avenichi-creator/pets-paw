import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BreedInfo as BreedInfoType } from '../api';
import { BreedCarousel } from './breed-carousel';
import { BreedInfo } from './breed-info';
import './styles.scss';

export function BreedView() {
	const breedData = useLoaderData() as BreedInfoType;

	return (
		<div className="breed-view">
			<BreedCarousel images={breedData.breedImageUrls} />
			<BreedInfo {...breedData} />
		</div>
	);
}
