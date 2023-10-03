import { useEffect, useState } from 'react';

interface UseDelayReturnValue {
	delayedValue: boolean;
}

export const useDelay = (
	value: boolean,
	delayBefore: number,
	delayAfter: number,
): UseDelayReturnValue => {
	const [delayedValue, setDelayedValue] = useState(value);

	useEffect(() => {
		const timeoutId = setTimeout(
			() => setDelayedValue(() => value),
			value ? delayBefore : delayAfter,
		);

		return () => clearTimeout(timeoutId);
	}, [value, delayAfter, delayBefore]);

	return { delayedValue };
};
