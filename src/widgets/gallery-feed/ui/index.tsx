import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchGalleryFeed, fetchUpdateGalleryFeed } from 'shared/store/gallery/tunks';
import { RootState } from 'shared/store/store';
import { LoadScreen } from 'shared/ui/load-screen';
import { GalleryImage } from './gallery-image';
import './styles.scss';

export function GalleryFeed() {
	const dispatch = useAppDispatch();

	const feed = useAppSelector((state: RootState) => state.galleryReducer.feed);
	const isFeedLoading = useAppSelector((state: RootState) => state.galleryReducer.isLoading);

	const feedRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		dispatch(fetchGalleryFeed());
	}, []);

	useEffect(() => {
		if (!feedRef.current) return;

		const observer = new IntersectionObserver(() => dispatch(fetchUpdateGalleryFeed()));
		observer.observe(feedRef.current);

		return () => {
			if (!feedRef.current) return;

			observer.unobserve(feedRef.current);
		};
	}, [feedRef.current]);

	return (
		<div className="gallery-feed-wrapper">
			<section className="gallery-feed">
				{feed.map((item, index) => {
					return <GalleryImage key={index} {...item} isMirrorCluster={(index + 1) % 10 > 5} />;
				})}
			</section>
			<div className="gallery-feed-loader" ref={feedRef}>
				<LoadScreen isActive={isFeedLoading} />
			</div>
		</div>
	);
}
