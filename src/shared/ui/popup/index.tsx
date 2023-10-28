import clsx from 'clsx';
import React, { PropsWithChildren, useRef } from 'react';
import { AnimationDuration } from 'shared/config/animation';
import { useDelay } from 'shared/lib/animation';
import { useClickOutside } from 'shared/lib/click-outside';
import { PopupCloseButton } from './popup-close-button';
import './styles.scss';

interface PopupProps extends PropsWithChildren {
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

export function Popup(props: PopupProps) {
	const { className, isOpen = true, children, onClose } = props;

	const popupRef = useRef(null);

	const { delayedValue } = useDelay(isOpen, 0, AnimationDuration.popup);

	useClickOutside(popupRef.current, () => {
		onClose && onClose();
	});

	return (
		<>
			{(isOpen || delayedValue) && (
				<div className={clsx('popup', { open: isOpen && delayedValue })}>
					<div className="popup-bg" />
					<div className="popup-body" ref={popupRef}>
						<div className={clsx('popup-content-wrapper')}>
							<PopupCloseButton onClick={onClose} />
							<div className={clsx('popup-content', className)}>{children}</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
