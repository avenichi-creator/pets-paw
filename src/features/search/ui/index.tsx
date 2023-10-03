import clsx from 'clsx';
import React from 'react';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

interface SearchProps {
	className?: string;
}

export function Search(props: SearchProps) {
	const { className } = props;

	return (
		<div className={clsx('search', className)}>
			<input className="search-input" type="search" placeholder="Search for breeds by name" />
			<IconButton className="search-button" size="normal">
				<Icon iconVariant="search" />
			</IconButton>
		</div>
	);
}
