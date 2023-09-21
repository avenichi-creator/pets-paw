import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setThemeDark, setThemeLight } from 'shared/store/theme/reducer';
import { themeSelector } from 'shared/store/theme/selectors';
import { Icon } from 'shared/ui/icon';
import { Toggle } from 'shared/ui/toggle';
import './styles.scss';

export function ThemeToggle() {
	const theme = useAppSelector(themeSelector);

	const dispatch = useAppDispatch();

	const [isLightTheme, setIsLightTheme] = useState(theme === 'light');

	useEffect(() => {
		if (isLightTheme) dispatch(setThemeLight());
		else dispatch(setThemeDark());
	}, [isLightTheme]);

	document.documentElement.setAttribute('data-theme', theme);

	return (
		<div className="theme-toggle">
			<div className="theme-toggle-icon-wrapper">
				<Icon width={16} height={16} iconVariant={isLightTheme ? 'eye' : 'eye-close'} />
			</div>
			<Toggle
				className="theme-toggle-toggler"
				isActive={true}
				onChange={(isChecked) => setIsLightTheme(isChecked)}
			/>
		</div>
	);
}
