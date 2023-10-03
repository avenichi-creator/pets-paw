import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'features/search';
import { OpenAsideButton } from 'shared/ui/aside';
import { HeaderLinksData } from '../config';
import { HeaderLink } from './header-link';
import './styles.scss';

export function Header() {
	const location = useLocation();

	return (
		<header className="header">
			<OpenAsideButton />
			<Search className="header-search" />
			<nav className="header-nav">
				{HeaderLinksData.map((item, index) => {
					return <HeaderLink key={index} {...item} isActive={location.pathname === item.path} />;
				})}
			</nav>
		</header>
	);
}
