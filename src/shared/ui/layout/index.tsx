import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as ScreenLayout } from 'shared/config/layout';
import { useWindowSize } from 'shared/lib/window-size';
import { InlineAside, PopupAside } from 'shared/ui/aside';
import './styles.scss';

interface LayoutProps {
	isInlineAside?: boolean;
}

export function Layout(props: LayoutProps) {
	const { isInlineAside = false } = props;

	const { width } = useWindowSize();

	const isMainVisible = !isInlineAside || (isInlineAside && width >= ScreenLayout.desktop);

	return (
		<div className="layout">
			<div className="layout-aside">
				{isInlineAside || width >= ScreenLayout.desktop ? <InlineAside /> : <PopupAside />}
			</div>
			{isMainVisible && (
				<main className="layout-main">
					<Outlet />
				</main>
			)}
		</div>
	);
}
