import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as ScreenLayout } from 'shared/config/layout';
import { useWindowSize } from 'shared/lib/window-size';
import { InlineAside, PopupAside } from 'shared/ui/aside';
import { Header } from 'widgets/header';
import './styles.scss';

interface LayoutProps {
	isInlineAside?: boolean;
}

export function Layout(props: LayoutProps) {
	const { isInlineAside = false } = props;

	const { width } = useWindowSize();

	const isContentVisible = !isInlineAside || (isInlineAside && width >= ScreenLayout.desktop);

	return (
		<div className="layout">
			<div className="layout-aside">
				{isInlineAside || width >= ScreenLayout.desktop ? <InlineAside /> : <PopupAside />}
			</div>
			{isContentVisible && (
				<div className="layout-content">
					{!isInlineAside && <Header />}
					<main className="layout-main">
						<Outlet />
					</main>
				</div>
			)}
		</div>
	);
}
