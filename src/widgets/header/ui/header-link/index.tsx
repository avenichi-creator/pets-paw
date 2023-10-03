import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { HedaerLinkProps } from 'widgets/header/config';
import './styles.scss';

export function HeaderLink(props: HedaerLinkProps) {
	const { path, icon, isActive = false } = props;

	return (
		<Link className={clsx('header-link', { active: isActive })} to={path}>
			{icon}
		</Link>
	);
}
