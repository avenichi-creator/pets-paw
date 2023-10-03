import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import './styles.scss';

export interface VotingButtonProps extends PropsWithChildren {
	isDisabled: boolean;
	onClick: () => void;
}

export function VotingButton(props: VotingButtonProps) {
	const { isDisabled, children, onClick } = props;

	const hadnleClick = () => !isDisabled && onClick();

	return (
		<button
			className={clsx('voting-button', { disabled: isDisabled })}
			disabled={isDisabled}
			onClick={hadnleClick}
		>
			{children}
		</button>
	);
}
