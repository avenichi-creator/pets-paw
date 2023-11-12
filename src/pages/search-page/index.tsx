import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { SearchView } from 'widgets/search-view';
import './styles.scss';

export function SearchPage() {
	return (
		<section className="search-page">
			<header className="search-page-header">
				<BackButton />
				<FancyText text="SEARCH" />
			</header>
			<div className="search-page-content">
				<SearchView />
			</div>
		</section>
	);
}
