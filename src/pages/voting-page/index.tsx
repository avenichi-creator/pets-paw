import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { VotingWidget } from 'widgets/voting';
import './styles.scss';

export function VotingPage() {
	return (
		<section className="voting-page">
			<header className="voting-page-header">
				<BackButton />
				<FancyText text="VOTING" />
			</header>
			<VotingWidget />
		</section>
	);
}
