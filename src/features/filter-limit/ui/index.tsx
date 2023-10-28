import React from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setFilterLimit } from 'shared/store/gallery/reducer';
import { fetchGalleryFeed } from 'shared/store/gallery/tunks';
import { RootState } from 'shared/store/store';
import { Select, SelectListItem } from 'shared/ui/select';
import { FilterLimitOptions } from '../config';
import './styles.scss';

export function FilterLimit() {
	const dispatch = useAppDispatch();

	const filterLimit = useAppSelector((state: RootState) => state.galleryReducer.filterLimit);

	const handleChange = (value: SelectListItem) => {
		dispatch(setFilterLimit(value));
		dispatch(fetchGalleryFeed());
	};

	return (
		<div className="filter-limit">
			<span className="filter-limit-label">LIMIT</span>
			<Select
				className="filter-limit-select"
				options={FilterLimitOptions}
				defaultValue={FilterLimitOptions.find((item) => item.value === filterLimit.value)}
				onChange={handleChange}
			/>
		</div>
	);
}
