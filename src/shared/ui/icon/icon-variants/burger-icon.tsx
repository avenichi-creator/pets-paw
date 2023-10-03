import React from 'react';
import { IconVariantPorps } from '../';

export function BurgerIcon(props: IconVariantPorps) {
	const { height = 20, width = 20, fill = '#FF868E' } = props;

	return (
		<svg
			className="icon burger-icon"
			width={width}
			height={height}
			viewBox="0 0 30 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="icon-fill"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
				fill={fill}
			/>
		</svg>
	);
}
