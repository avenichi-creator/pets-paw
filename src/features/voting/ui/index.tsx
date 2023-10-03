import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchFullLogList } from 'shared/store/log/thunks';
import { RootState } from 'shared/store/store';
import { voteImageIdSelector, voteImageUrlSelector } from 'shared/store/vote/selectors';
import {
	fetchRandomImage,
	fetchVoteDislike,
	fetchVoteFav,
	fetchVoteLike,
} from 'shared/store/vote/thunks';
import { Icon } from 'shared/ui/icon';
import { LoadScreen } from 'shared/ui/load-screen';
import './styles.scss';
import { VotingButton } from './voting-button';

export function VotingBar() {
	const dispatch = useAppDispatch();

	// const isLoading = true;
	const isLoading = useAppSelector((state: RootState) => state.voteReducer.isLoading);
	const imageId = useAppSelector(voteImageIdSelector);
	const imageUrl = useAppSelector(voteImageUrlSelector);

	const handleLike = () =>
		dispatch(fetchVoteLike(imageId)).then(() => {
			dispatch(fetchRandomImage());
			dispatch(fetchFullLogList());
		});

	const handleDislike = () =>
		dispatch(fetchVoteDislike(imageId)).then(() => {
			dispatch(fetchRandomImage());
			dispatch(fetchFullLogList());
		});

	const handleFav = () =>
		dispatch(fetchVoteFav(imageId)).then(() => {
			dispatch(fetchRandomImage());
			dispatch(fetchFullLogList());
		});

	useEffect(() => {
		dispatch(fetchRandomImage());
	}, []);

	return (
		<div className="voting">
			<div className="voting-img-wrapper">
				<LoadScreen isActive={isLoading} />
				{!isLoading && <img src={imageUrl} alt="cat" className="voting-img" />}
			</div>
			<div className="voting-bar-wrapper">
				<section className="voting-bar">
					<VotingButton isDisabled={isLoading} onClick={handleLike}>
						<Icon iconVariant="like" />
					</VotingButton>
					<VotingButton isDisabled={isLoading} onClick={handleFav}>
						<Icon iconVariant="fav" />
					</VotingButton>
					<VotingButton isDisabled={isLoading} onClick={handleDislike}>
						<Icon iconVariant="dislike" />
					</VotingButton>
				</section>
			</div>
		</div>
	);
}
