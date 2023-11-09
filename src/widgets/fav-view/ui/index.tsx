import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchInitialFavFeed, fetchUpdateFavFeed } from 'shared/store/fav/thunks';
import { Feed } from 'shared/ui/feed';

export function FavView() {
	const dispatch = useAppDispatch();

	const feed = useAppSelector((state) => state.favReducer.feed);
	const isFeedLoading = useAppSelector((state) => state.favReducer.isLoading);

	useEffect(() => {
		dispatch(fetchInitialFavFeed());
	}, []);

	return (
		<Feed
			className="fav-feed"
			feedItems={feed}
			isLoading={isFeedLoading}
			isLikeButtonVisible={false}
			isDislikeButtonVisible={false}
			onReachBottom={() => dispatch(fetchUpdateFavFeed())}
		/>
	);
}
