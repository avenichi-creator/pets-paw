import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchInitialLikesFeed } from 'shared/store/likes/thunks';
import { Feed } from 'shared/ui/feed';

export function LikesView() {
	const dispatch = useAppDispatch();

	const feed = useAppSelector((state) => state.likesReducer.feed);
	const isFeedLoading = useAppSelector((state) => state.likesReducer.isLoading);

	useEffect(() => {
		dispatch(fetchInitialLikesFeed());
	}, []);

	return (
		<Feed
			className="likes-feed"
			feedItems={feed}
			isLoading={isFeedLoading}
			isFavButtonVisible={false}
		/>
	);
}
