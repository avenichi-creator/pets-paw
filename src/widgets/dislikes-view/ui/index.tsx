import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchInitialDislikesFeed } from 'shared/store/dislikes/thunks';
import { Feed } from 'shared/ui/feed';

export function DislikesView() {
	const dispatch = useAppDispatch();

	const feed = useAppSelector((state) => state.dislikesReducer.feed);
	const isFeedLoading = useAppSelector((state) => state.dislikesReducer.isLoading);

	useEffect(() => {
		dispatch(fetchInitialDislikesFeed());
	}, []);

	return (
		<Feed
			className="dislikes-feed"
			feedItems={feed}
			isLoading={isFeedLoading}
			isFavButtonVisible={false}
		/>
	);
}
