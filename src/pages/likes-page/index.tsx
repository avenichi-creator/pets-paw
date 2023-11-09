import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { LikesView } from 'widgets/likes-view';
import './styles.scss';

export function LikesPage() {
	return (
		<section className="likes-page">
			<header className="likes-page-header">
				<BackButton />
				<FancyText text="LIKES" />
			</header>
			<div className="likes-page-content">
				<LikesView />
			</div>
		</section>
	);
}
