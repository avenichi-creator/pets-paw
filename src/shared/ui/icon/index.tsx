import React from 'react';
import {
	BackIcon,
	BurgerIcon,
	ChevronIcon,
	CloseIcon,
	DislikeIcon,
	ErrorIcon,
	EyeCloseIcon,
	EyeIcon,
	FavAltIcon,
	FavIcon,
	LikeIcon,
	LogoIcon,
	LogoTextIcon,
	OrderAscIcon,
	OrderDescIcon,
	SearchIcon,
	SuccessIcon,
	UploadIcon,
} from './icon-variants';

export type IconVariant =
	| 'back'
	| 'burger'
	| 'chevron'
	| 'close'
	| 'dislike'
	| 'error'
	| 'eye-close'
	| 'eye'
	| 'fav-alt'
	| 'fav'
	| 'like'
	| 'logo'
	| 'logo-text'
	| 'order-asc'
	| 'order-desc'
	| 'search'
	| 'success'
	| 'upload';

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
		chevron: ChevronIcon,
		close: CloseIcon,
		dislike: DislikeIcon,
		error: ErrorIcon,
		'eye-close': EyeCloseIcon,
		eye: EyeIcon,
		'fav-alt': FavAltIcon,
		fav: FavIcon,
		like: LikeIcon,
		logo: LogoIcon,
		'logo-text': LogoTextIcon,
		'order-asc': OrderAscIcon,
		'order-desc': OrderDescIcon,
		search: SearchIcon,
		success: SuccessIcon,
		upload: UploadIcon,
	};

	const Component = iconVariants[iconVariant];

	return <Component {...props} />;
}
