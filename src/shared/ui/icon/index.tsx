import React from 'react';
import { EyeCloseIcon, EyeIcon, LogoIcon, LogoTextIcon } from './icon-variants';

type IconVariant = 'eye-close' | 'eye' | 'logo' | 'logo-text';

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
		'eye-close': EyeCloseIcon,
		eye: EyeIcon,
		logo: LogoIcon,
		'logo-text': LogoTextIcon,
	};

	const Component = iconVariants[iconVariant];

	return <Component {...props} />;
}
