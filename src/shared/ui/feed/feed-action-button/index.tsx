import clsx from 'clsx';
import React from 'react';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';

interface FeedActionButtonProps {
	type: 'like' | 'dislike' | 'fav';
	isActive: boolean;
	onClick: () => void;
}

export function FeedActionButton(props: FeedActionButtonProps) {
	const { type, isActive, onClick } = props;

	return (
		<IconButton
			className={clsx('feed-item-action-button', `feed-item-action-${type}`, { active: isActive })}
			onClick={onClick}
		>
			<Icon iconVariant={type} />
		</IconButton>
	);
}
