import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavCardProps } from 'shared/config/nav-data';
import { useAppDispatch } from 'shared/lib/store';
import { setAsideClose } from 'shared/store/aside/reducer';
import './styles.scss';

export function NavCard(props: NavCardProps) {
	const { path, img, title, isActive = false } = props;

	const dispatch = useAppDispatch();

	return (
		<Link
			to={path}
			className={clsx('nav-card', { active: isActive })}
			onClick={() => dispatch(setAsideClose())}
		>
			<div className="nav-card-img-wrapper">
				<img src={img} alt={title} className="nav-card-img" />
			</div>
			<div className="nav-card-title">
				<span>{title}</span>
			</div>
		</Link>
	);
}
