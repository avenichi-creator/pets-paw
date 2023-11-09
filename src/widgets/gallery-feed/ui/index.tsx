import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchGalleryFeed, fetchUpdateGalleryFeed } from 'shared/store/gallery/tunks';
import { RootState } from 'shared/store/store';
import { Feed } from 'shared/ui/feed';

export function GalleryFeed() {
	const dispatch = useAppDispatch();

	const feed = useAppSelector((state: RootState) => state.galleryReducer.feed);
	const isFeedLoading = useAppSelector((state: RootState) => state.galleryReducer.isLoading);

	const handleLoadInitialFeed = () => dispatch(fetchGalleryFeed());

	const handleUpdateFeed = () => dispatch(fetchUpdateGalleryFeed());

	useEffect(() => {
		handleLoadInitialFeed();
	}, []);

	return (
		<Feed
			className="gallery-feed"
			feedItems={feed}
			isLoading={isFeedLoading}
			onReachBottom={handleUpdateFeed}
		/>
	);
}
