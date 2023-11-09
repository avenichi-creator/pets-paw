import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { LoadScreen } from '../load-screen';
import { FeedItem, FeedItemProps } from './feed-item';
import './styles.scss';

interface FeedProps {
	className?: string;
	isLoading: boolean;
	isLikeButtonVisible?: boolean;
	isDislikeButtonVisible?: boolean;
	isFavButtonVisible?: boolean;
	feedItems: FeedItemProps[];
	onReachBottom?: () => void;
}

export function Feed(props: FeedProps) {
	const {
		className,
		isLoading,
		isLikeButtonVisible = true,
		isDislikeButtonVisible = true,
		isFavButtonVisible = true,
		feedItems,
		onReachBottom,
	} = props;

	const feedRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!feedRef.current || !onReachBottom) return;

		const observer = new IntersectionObserver(onReachBottom);
		observer.observe(feedRef.current);

		return () => {
			if (!feedRef.current) return;

			observer.unobserve(feedRef.current);
		};
	}, [feedRef.current]);

	return (
		<section className={clsx('feed', className)}>
			<ul className="feed-list">
				{feedItems.map((item, index) => (
					<FeedItem
						key={index}
						isMirrorCluster={(index + 1) % 10 > 5}
						isLikeButtonVisible={isLikeButtonVisible}
						isDislikeButtonVisible={isDislikeButtonVisible}
						isFavButtonVisible={isFavButtonVisible}
						{...item}
					/>
				))}
			</ul>
			<div className="feed-loader" ref={feedRef}>
				<LoadScreen isActive={isLoading} />
			</div>
		</section>
	);
}
