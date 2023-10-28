import clsx from 'clsx';
import React from 'react';
import loader1 from 'shared/assets/general/loading-pink.png';
import loader2 from 'shared/assets/general/loading-white.png';
import { AnimationDuration } from 'shared/config/animation';
import { useDelay } from 'shared/lib/animation';
import './styles.scss';

interface LoadScreenProps {
	isActive?: boolean;
	type?: 'white' | 'pink';
}

export function LoadScreen(props: LoadScreenProps) {
	const { isActive = false, type = 'pink' } = props;

	const { delayedValue: isActiveDelayed } = useDelay(isActive, 0, AnimationDuration.main);

	return (
		<>
			{(isActive || isActiveDelayed) && (
				<div className={clsx('load-screen', { active: isActive && isActiveDelayed })}>
					<img
						src={type === 'pink' ? loader1 : loader2}
						alt="loader"
						className="load-screen-circle"
					/>
				</div>
			)}
		</>
	);
}
