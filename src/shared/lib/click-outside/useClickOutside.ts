import { useEffect } from 'react';

export const useClickOutside = (
	element: HTMLElement | null,
	callback: (value: boolean) => void,
) => {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent | TouchEvent) => {
			if (element && e.target && !element.contains(e.target as Node)) callback(false);
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, [element, callback]);
};
