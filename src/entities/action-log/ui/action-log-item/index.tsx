import React from 'react';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

interface ActionLogItemProps {
	createdAt: string;
	imageId: string;
	value: number;
}

export function ActionLogItem(props: ActionLogItemProps) {
	const { createdAt, imageId, value } = props;

	const date = new Date(createdAt);

	return (
		<li className="action-log-item">
			<time>{`${date.getHours()}:${date.getMinutes()}`}</time>
			<span>
				Image ID: <strong>{imageId}</strong> was added to{' '}
				{value === -1 ? 'Dislikes' : value === 0 ? 'Favourites' : 'Likes'}
			</span>
			<Icon iconVariant={value === -1 ? 'dislike' : value === 0 ? 'fav' : 'like'} />
		</li>
	);
}
