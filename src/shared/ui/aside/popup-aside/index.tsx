import React from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeToggle } from 'features/theme-toggle';
import { NavData } from 'shared/config/nav-data';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setAsideClose } from 'shared/store/aside/reducer';
import { isAsideOpenSelector } from 'shared/store/aside/selectors';
import { Popup } from 'shared/ui/popup';
import { NavCard } from '../nav-card';
import './styles.scss';

export function PopupAside() {
	const location = useLocation();

	const dispatch = useAppDispatch();

	const isAsideOpen = useAppSelector(isAsideOpenSelector);

	return (
		<Popup className="popup-aside" isOpen={isAsideOpen} onClose={() => dispatch(setAsideClose())}>
			<ThemeToggle />
			<nav className="aside-nav">
				{NavData.map((item, index) => (
					<NavCard key={index} {...item} isActive={location.pathname === item.path} />
				))}
			</nav>
		</Popup>
	);
}
