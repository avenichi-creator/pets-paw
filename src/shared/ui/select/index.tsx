import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useClickOutside } from 'shared/lib/click-outside';
import { SelectField } from './select-filed';
import { SelectList } from './select-list';
import './styles.scss';

export interface SelectListItem {
	value: string;
	label: string;
}

interface SelectProps {
	className?: string;
	options: SelectListItem[];
	defaultValue?: SelectListItem;
	onChange: (value: SelectListItem) => void;
}

export function Select(props: SelectProps) {
	const { className, options, defaultValue, onChange } = props;

	const [isActive, setIsActive] = useState(false);
	const [selectedValue, setSelectedValue] = useState<SelectListItem>(options[0]);

	const selectRef = useRef(null);

	useClickOutside(selectRef.current, (value: boolean) => setIsActive(value));

	useEffect(() => {
		setSelectedValue(defaultValue && options.includes(defaultValue) ? defaultValue : options[0]);
	}, []);

	const handleValueChange = (newValue: SelectListItem) => {
		onChange(newValue);
		setSelectedValue(newValue);
		setIsActive(false);
	};
	const handleToggleActive = () => setIsActive(!isActive);

	return (
		<div className={clsx('select', { active: isActive }, className)} ref={selectRef}>
			<SelectField label={selectedValue.label} onClick={handleToggleActive} />
			<SelectList options={options} isActive={isActive} onChange={handleValueChange} />
		</div>
	);
}
