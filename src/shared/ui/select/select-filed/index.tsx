import React from 'react';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

interface SelectFieldProps {
	label: string;
	onClick: () => void;
}

export function SelectField(props: SelectFieldProps) {
	const { label, onClick } = props;

	return (
		<button className="select-field" onClick={onClick}>
			<span>{label}</span>
			<Icon iconVariant="chevron" />
		</button>
	);
}
