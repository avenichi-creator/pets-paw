import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from 'features/theme-toggle/ui';
import { NavData } from 'shared/config/nav-data';
import { Routes } from 'shared/config/routes';
import { Icon } from 'shared/ui/icon';
import { NavCard } from '../nav-card';
import './styles.scss';

export function InlineAside() {
	const location = useLocation();

	return (
		<aside className="aside-inline">
			<Link to={Routes.homePage} className="aside-logo">
				<Icon iconVariant="logo" />
				<Icon iconVariant="logo-text" />
			</Link>
			<ThemeToggle />
			<div className="aside-text">
				<h1>Hi!👋</h1>
				<h2>Welcome to MacPaw Bootcamp 2023</h2>
				<p>Lets start using The Cat API</p>
			</div>
			<nav className="aside-nav">
				{NavData.map((item, index) => (
					<NavCard key={index} {...item} isActive={location.pathname === item.path} />
				))}
			</nav>
		</aside>
	);
}
