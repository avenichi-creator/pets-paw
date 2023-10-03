import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import './styles.scss';

interface IconButtonProps extends PropsWithChildren {
	className?: string;
	size?: 'normal' | 'large';
	onClick?: () => void;
}

export function IconButton(props: IconButtonProps) {
	const { className, size = 'normal', children, onClick } = props;

	return (
		<button onClick={onClick} className={clsx('icon-button', size, className)}>
			{children}
		</button>
	);
}
