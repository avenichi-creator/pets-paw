import React from 'react';
import { IconVariantPorps } from '../';

export function EyeCloseIcon(props: IconVariantPorps) {
	const { height = 20, width = 20, fill = '#FF868E' } = props;

	return (
		<svg
			className="icon eye-close-icon"
			width={width}
			height={height}
			viewBox="0 0 16 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="icon-fill"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.66283 3.11C3.79827 4.3716 5.53146 5.60011 7.99973 5.60011C10.468 5.60011 12.2012 4.3716 13.3367 3.11C13.9047 2.47878 14.3164 1.84576 14.5857 1.37051C14.7201 1.13341 14.8182 0.937055 14.8819 0.801856C14.9138 0.734299 14.937 0.682142 14.9518 0.647952C14.9592 0.630861 14.9645 0.618273 14.9677 0.61051L14.971 0.60253L14.9714 0.601682C14.9713 0.60185 14.9712 0.602038 15.4664 0.800114C15.9616 0.998191 15.9615 0.99842 15.9614 0.998669L15.9612 0.99927L15.9605 1.00084L15.9587 1.00543L15.9525 1.02032C15.9474 1.03274 15.94 1.0501 15.9305 1.07207C15.9115 1.116 15.8836 1.17843 15.8467 1.25671C15.773 1.41317 15.6627 1.63348 15.5138 1.89639C15.2164 2.42114 14.7614 3.12144 14.1295 3.82356C13.9344 4.04031 13.7219 4.25784 13.4913 4.47075L15.3102 6.28966L14.556 7.0439L12.6628 5.15074C11.5878 5.92968 10.2211 6.54206 8.53307 6.64989L8.53308 8.80011L7.46642 8.80012L7.4664 6.64989C5.77837 6.54206 4.4117 5.92969 3.33669 5.15075L1.44354 7.0439L0.689295 6.28966L2.50819 4.47076C2.27763 4.25784 2.06506 4.04031 1.86999 3.82356C1.23808 3.12144 0.783092 2.42113 0.485737 1.89639C0.336759 1.63348 0.226516 1.41317 0.152754 1.2567C0.115852 1.17843 0.0880203 1.116 0.0689819 1.07207C0.059461 1.05009 0.0521336 1.03273 0.0469656 1.02032L0.0408267 1.00543L0.0389625 1.00084L0.0383302 0.999268L0.0380888 0.998666C0.0379889 0.998417 0.0378972 0.998188 0.533085 0.800114C1.02827 0.602041 1.0282 0.601852 1.02813 0.601684L1.02804 0.601448L1.02848 0.602532L1.03177 0.610513C1.035 0.618275 1.0403 0.630863 1.04771 0.647954C1.06252 0.682144 1.08573 0.734301 1.11758 0.801859C1.18132 0.937058 1.27941 1.13341 1.41376 1.37051C1.68307 1.84576 2.09474 2.47878 2.66283 3.11ZM1.02799 0.601335C1.02797 0.601293 1.02799 0.601331 1.02804 0.601448L1.02799 0.601335Z"
				fill={fill}
			/>
		</svg>
	);
}
