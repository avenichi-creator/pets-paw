import React from 'react';
import { IconVariantPorps } from '../';

export function CloseIcon(props: IconVariantPorps) {
	const { height = 20, width = 20, fill = '#FF868E' } = props;

	return (
		<svg
			className="icon close-icon"
			width={width}
			height={height}
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="icon-fill"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5859 12.9996L0.292969 1.70669L1.70718 0.29248L13.0001 11.5854L24.293 0.29248L25.7072 1.70669L14.4143 12.9996L25.7072 24.2925L24.293 25.7067L13.0001 14.4138L1.70718 25.7067L0.292969 24.2925L11.5859 12.9996Z"
				fill={fill}
			/>
		</svg>
	);
}
