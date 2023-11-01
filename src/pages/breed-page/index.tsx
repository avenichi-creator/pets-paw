import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { BreedView } from 'widgets/breed-view';
import './styles.scss';

export function BreedPage() {
	const { breedId } = useParams();

	return (
		<section className="breed-page">
			<header className="breed-page-header">
				<BackButton />
				<FancyText text={breedId ?? ''} />
			</header>
			<div className="breed-page-content">
				<BreedView />
			</div>
		</section>
	);
}
