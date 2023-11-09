import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { DislikesView } from 'widgets/dislikes-view';
import './styles.scss';

export function DislikesPage() {
	return (
		<section className="dislikes-page">
			<header className="dislikes-page-header">
				<BackButton />
				<FancyText text="DISLIKES" />
			</header>
			<div className="dislikes-page-content">
				<DislikesView />
			</div>
		</section>
	);
}
