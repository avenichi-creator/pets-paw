import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavCardProps } from 'shared/config/nav-data';
import './styles.scss';

export function NavCard(props: NavCardProps) {
	const { path, img, title, isActive = false } = props;

	return (
		<Link to={path} className={clsx('nav-card', { active: isActive })}>
			<div className="nav-card-img-wrapper">
				<img src={img} alt={title} className="nav-card-img" />
			</div>
			<div className="nav-card-title">
				<span>{title}</span>
			</div>
		</Link>
	);
}
