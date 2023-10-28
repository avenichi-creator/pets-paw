import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'shared/config/routes';
import { voteDislike, voteFav, voteLike, voteUnfav } from 'shared/lib/vote';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

export interface GalleryImageProps {
	imgId: string;
	imgUrl: string;
	breedName: string | undefined;
	breedId: string | undefined;
	isFav: boolean;
	isLiked: boolean;
	isDisliked: boolean;
	favId: number | undefined;
	isMirrorCluster: boolean;
}

export function GalleryImage(props: GalleryImageProps) {
	const { imgId, imgUrl, breedName, breedId, isMirrorCluster } = props;

	const [isFav, setFav] = useState(props.isFav);
	const [isLiked, setLiked] = useState(props.isLiked);
	const [isDisliked, setDisliked] = useState(props.isDisliked);
	const [favId, setFavId] = useState(props.favId);

	const handleFav = async () => {
		if (isFav) {
			favId && voteUnfav(favId);
			setFavId(undefined);
			setFav(false);
		} else {
			setFavId((await voteFav(imgId)).id);
			setFav(true);
		}
	};

	const handleLike = () => {
		if (isLiked) return;

		voteLike(imgId);
		setLiked(true);
		setDisliked(false);
	};

	const handleDislike = () => {
		if (isDisliked) return;

		voteDislike(imgId);
		setLiked(false);
		setDisliked(true);
	};

	return (
		<div className={clsx('gallery-image', isMirrorCluster ? 'mirror' : 'default')}>
			<img src={imgUrl} alt="cat" />
			<div className="gallery-image-actions-wrapper">
				<div className="gallery-image-actions-list">
					<IconButton
						className={clsx('gallery-image-action-like', { active: isLiked })}
						onClick={handleLike}
					>
						<Icon iconVariant="like" />
					</IconButton>
					<IconButton className="gallery-image-action-fav" onClick={handleFav}>
						<Icon iconVariant={isFav ? 'fav-alt' : 'fav'} />
					</IconButton>
					<IconButton
						className={clsx('gallery-image-action-dislike', { active: isDisliked })}
						onClick={handleDislike}
					>
						<Icon iconVariant="dislike" />
					</IconButton>
					{breedName && (
						<Link className="gallery-image-action-breed" to={Routes.breedPage}>
							{breedName}
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
