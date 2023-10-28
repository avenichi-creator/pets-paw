import clsx from 'clsx';
import React from 'react';
import { AnimationDuration } from 'shared/config/animation';
import { useDelay } from 'shared/lib/animation';
import { SelectListItem } from '..';
import './styles.scss';

interface SelectListProps {
	options: SelectListItem[];
	isActive: boolean;
	onChange: (newValue: SelectListItem) => void;
}

export function SelectList(props: SelectListProps) {
	const { options, isActive, onChange } = props;

	const { delayedValue: delayedIsActive } = useDelay(isActive, 0, AnimationDuration.main);

	return (
		<>
			{(isActive || delayedIsActive) && (
				<div className="select-list-wrapper">
					<ul className={clsx('select-list', { active: isActive && delayedIsActive })}>
						{options.map((item, index) => {
							return (
								<li key={index} className="select-list-item" onClick={() => onChange(item)}>
									{item.label}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}
