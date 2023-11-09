import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { FavView } from 'widgets/fav-view';
import './styles.scss';

export function FavPage() {
	return (
		<section className="fav-page">
			<header className="fav-page-header">
				<BackButton />
				<FancyText text="FAVOURITES" />
			</header>
			<div className="fav-page-content">
				<FavView />
			</div>
		</section>
	);
}
