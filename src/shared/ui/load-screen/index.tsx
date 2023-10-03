import clsx from 'clsx';
import React from 'react';
import loader from 'shared/assets/general/loading-pink.png';
import { AnimationDuration } from 'shared/config/animation';
import { useDelay } from 'shared/lib/animation';
import './styles.scss';

interface LoadScreenProps {
	isActive?: boolean;
}

export function LoadScreen(props: LoadScreenProps) {
	const { isActive = false } = props;

	const { delayedValue: isActiveDelayed } = useDelay(isActive, 0, AnimationDuration.main);

	return (
		<>
			{(isActive || isActiveDelayed) && (
				<div className={clsx('load-screen', { active: isActive && isActiveDelayed })}>
					<img src={loader} alt="loading" className="load-screen-circle" />
				</div>
			)}
		</>
	);
}
