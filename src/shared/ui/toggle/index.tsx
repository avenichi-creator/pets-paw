import clsx from 'clsx';
import React, { useState } from 'react';
import './styles.scss';

interface ToggleProps {
	className?: string;
	isActive?: boolean;
	onChange: (isChecked: boolean) => void;
}

export function Toggle(props: ToggleProps) {
	const { className, isActive = false, onChange } = props;

	const [active, setActive] = useState(isActive);

	return (
		<label className={clsx('toggle', { active: active }, className)}>
			<input
				type="checkbox"
				defaultChecked={active}
				onChange={(e) => {
					const isChecked = e.target.checked;

					setActive(isChecked);
					onChange(isChecked);
				}}
			/>
		</label>
	);
}
