import React from 'react';
import { useAppSelector } from 'shared/lib/store';
import { Feed } from 'shared/ui/feed';

export function SearchView() {
	const feed = useAppSelector((state) => state.searchReducer.feed);
	const isFeedLoading = useAppSelector((state) => state.searchReducer.isLoading);

	return (
		<Feed
			className="search-feed"
			feedItems={feed}
			isLoading={isFeedLoading}
			isFavButtonVisible={false}
			isLikeButtonVisible={false}
			isDislikeButtonVisible={false}
		/>
	);
}
