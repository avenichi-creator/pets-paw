import React from 'react';
import {
	BackIcon,
	BurgerIcon,
	CloseIcon,
	DislikeIcon,
	EyeCloseIcon,
	EyeIcon,
	FavIcon,
	LikeIcon,
	LogoIcon,
	LogoTextIcon,
	SearchIcon,
} from './icon-variants';

export type IconVariant =
	| 'back'
	| 'burger'
	| 'close'
	| 'dislike'
	| 'eye-close'
	| 'eye'
	| 'fav'
	| 'like'
	| 'logo'
	| 'logo-text'
	| 'search';

export interface IconVariantPorps {
	width?: number;
	height?: number;
	fill?: string;
}

interface IconProps extends IconVariantPorps {
	iconVariant: IconVariant;
}

export function Icon(props: IconProps) {
	const { iconVariant } = props;

	const iconVariants = {
		back: BackIcon,
		burger: BurgerIcon,
		close: CloseIcon,
		dislike: DislikeIcon,
		'eye-close': EyeCloseIcon,
		eye: EyeIcon,
		fav: FavIcon,
		like: LikeIcon,
		logo: LogoIcon,
		'logo-text': LogoTextIcon,
		search: SearchIcon,
	};

	const Component = iconVariants[iconVariant];

	return <Component {...props} />;
}
