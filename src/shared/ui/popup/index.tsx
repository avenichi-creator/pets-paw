import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { AnimationDuration } from 'shared/config/animation';
import { useDelay } from 'shared/lib/animation';
import { PopupCloseButton } from './popup-close-button';
import './styles.scss';

interface PopupProps extends PropsWithChildren {
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

export function Popup(props: PopupProps) {
	const { className, isOpen = true, children, onClose } = props;

	const { delayedValue } = useDelay(isOpen, 0, AnimationDuration.popup);

	return (
		<>
			{(isOpen || delayedValue) && (
				<div className={clsx('popup', { open: isOpen && delayedValue })}>
					<div className="popup-bg" />
					<div className="popup-body">
						<div className={clsx('popup-content', className)}>
							<PopupCloseButton onClick={onClose} />
							{children}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
