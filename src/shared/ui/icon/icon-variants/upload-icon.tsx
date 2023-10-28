import React from 'react';
import { IconVariantPorps } from '../';

export function UploadIcon(props: IconVariantPorps) {
	const { height = 20, width = 20, fill = '#FF868E' } = props;

	return (
		<svg
			className="icon upload-icon"
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1_1567)">
				<path
					className="icon-fill"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1_1567">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
