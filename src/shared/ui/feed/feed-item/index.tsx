import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { voteDislike, voteFav, voteLike, voteUnfav } from 'shared/lib/vote';
import { voteDelete } from 'shared/lib/vote/vote-delete';
import { FeedActionButton } from '../feed-action-button';
import './styles.scss';

export interface FeedItemProps {
	imgId: string;
	imgUrl: string;
	breedName?: string;
	breedId?: string;
	isLiked?: boolean;
	isDisliked?: boolean;
	isLikeButtonVisible?: boolean;
	isDislikeButtonVisible?: boolean;
	isFavButtonVisible?: boolean;
	voteId?: number;
	favId?: number;
	isMirrorCluster?: boolean;
}

export function FeedItem(props: FeedItemProps) {
	const {
		imgId,
		imgUrl,
		breedName,
		breedId,
		isLikeButtonVisible,
		isDislikeButtonVisible,
		isFavButtonVisible,
		isMirrorCluster = false,
	} = props;

	const [isFav, setFav] = useState(props.favId ? true : false);
	const [isLiked, setLiked] = useState(props.isLiked || false);
	const [isDisliked, setDisliked] = useState(props.isDisliked || false);
	const [favId, setFavId] = useState(props.favId);
	const [voteId, setVoteId] = useState(props.voteId);

	const handleFav = async () => {
		if (isFav) {
			if (favId) voteUnfav(favId);

			setFavId(undefined);
			setFav(false);
		} else {
			setFavId((await voteFav(imgId)).id);
			setFav(true);
		}
	};

	const handleLike = async () => {
		if (voteId) voteDelete(voteId);

		if (isLiked) {
			setLiked(false);
		} else {
			setVoteId((await voteLike(imgId)).id);
			setLiked(true);
			setDisliked(false);
		}
	};

	const handleDislike = async () => {
		if (voteId) voteDelete(voteId);

		if (isDisliked) {
			setDisliked(false);
		} else {
			setVoteId((await voteDislike(imgId)).id);
			setLiked(false);
			setDisliked(true);
		}
	};

	return (
		<li className={clsx('feed-item', isMirrorCluster ? 'mirror-cluster' : 'default-cluster')}>
			<img src={imgUrl} alt="cat" />
			<div className="feed-item-actions-wrapper">
				<div className="feed-item-actions-list">
					{isLikeButtonVisible && (
						<FeedActionButton type="like" isActive={isLiked} onClick={handleLike} />
					)}
					{isFavButtonVisible && (
						<FeedActionButton type="fav" isActive={isFav} onClick={handleFav} />
					)}
					{isDislikeButtonVisible && (
						<FeedActionButton type="dislike" isActive={isDisliked} onClick={handleDislike} />
					)}
					{breedName && breedId && (
						<Link className="feed-item-action-breed" to={`/breed/${breedId}`}>
							{breedName}
						</Link>
					)}
				</div>
			</div>
		</li>
	);
}
