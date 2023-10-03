import React from 'react';
import { useAppDispatch } from 'shared/lib/store';
import { setAsideOpen } from 'shared/store/aside/reducer';
import { IconButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

export function OpenAsideButton() {
	const dispatch = useAppDispatch();

	return (
		<IconButton className="open-aside-button" size="large" onClick={() => dispatch(setAsideOpen())}>
			<Icon iconVariant="burger" />
		</IconButton>
	);
}
