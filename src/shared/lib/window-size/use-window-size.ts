import { useEffect, useState } from 'react';

interface UseWindowSizeReturnValue {
	width: number;
	height: number;
}

export const useWindowSize = (): UseWindowSizeReturnValue => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const handleResize = (): void => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		width,
		height,
	};
};
