import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import './styles.scss';

export function BreedsPage() {
	return (
		<section className="breeds-page">
			<header className="breeds-page-header">
				<BackButton />
				<FancyText text="BREEDS" />
			</header>
		</section>
	);
}
