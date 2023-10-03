import React from 'react';
import { Layout } from 'shared/config/layout';
import { useWindowSize } from 'shared/lib/window-size';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

interface PopupCloseButtonProps {
	onClick?: () => void;
}

export function PopupCloseButton(props: PopupCloseButtonProps) {
	const { onClick } = props;

	const { width } = useWindowSize();

	return (
		<IconButton
			className="popup-close-button"
			size={width >= Layout.desktop ? 'normal' : 'large'}
			onClick={onClick}
		>
			<Icon iconVariant="close" />
		</IconButton>
	);
}
