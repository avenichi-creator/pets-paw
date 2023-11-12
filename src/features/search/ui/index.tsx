import clsx from 'clsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'shared/config/routes';
import { useAppDispatch } from 'shared/lib/store';
import { fetchInitialSearchFeed } from 'shared/store/search/thunks';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

interface SearchProps {
	className?: string;
}

export function Search(props: SearchProps) {
	const { className } = props;

	const [value, setValue] = useState('');

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(fetchInitialSearchFeed(value));
		navigate(Routes.searchPage);
	};

	return (
		<div className={clsx('search', className)}>
			<input
				className="search-input"
				type="search"
				placeholder="Search for breeds by name"
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && handleClick()}
			/>
			<IconButton className="search-button" size="normal" onClick={handleClick}>
				<Icon iconVariant="search" />
			</IconButton>
		</div>
	);
}
