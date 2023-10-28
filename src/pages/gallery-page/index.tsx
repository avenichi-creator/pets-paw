import React from 'react';
import { BackButton } from 'features/back-button';
import { FancyText } from 'shared/ui/fancy-text';
import { GalleryFeed } from 'widgets/gallery-feed';
import { GalleryFilter } from 'widgets/gallery-filter';
import { UploadPopup } from 'widgets/upload-popup';
import { OpenUploadButton } from 'widgets/upload-popup/ui/open-upload-button';
import './styles.scss';

export function GalleryPage() {
	return (
		<section className="gallery-page">
			<header className="gallery-page-header">
				<BackButton />
				<FancyText text="GALLERY" />
				<OpenUploadButton />
			</header>
			<div className="gallery-page-content">
				<GalleryFilter />
				<GalleryFeed />
				<UploadPopup />
			</div>
		</section>
	);
}
