import React from 'react';
import { IconVariantPorps } from '../';

export function ChevronIcon(props: IconVariantPorps) {
	const { height = 12, width = 12, fill = '#FF868E' } = props;

	return (
		<svg
			className="icon chevron-icon"
			width={width}
			height={height}
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1_1593)">
				<path
					className="icon-fill"
					d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1_1593">
					<rect width="12" height="12" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
