import React, { ReactNode } from 'react';
import { Routes } from 'shared/config/routes';
import { Icon } from 'shared/ui/icon';

export interface HedaerLinkProps {
	path: string;
	icon: ReactNode;
	isActive?: boolean;
}

export const HeaderLinksData: HedaerLinkProps[] = [
	{
		path: Routes.likesPage,
		icon: <Icon iconVariant="like" />,
	},
	{
		path: Routes.favPage,
		icon: <Icon iconVariant="fav" />,
	},
	{
		path: Routes.dislikesPage,
		icon: <Icon iconVariant="dislike" />,
	},
];
