import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

export function BackButton() {
	const navigate = useNavigate();

	return (
		<IconButton className="back-button" onClick={() => navigate(-1)}>
			<Icon iconVariant="back" />
		</IconButton>
	);
}
