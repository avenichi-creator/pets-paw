import React from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setFilterType } from 'shared/store/gallery/reducer';
import { fetchGalleryFeed } from 'shared/store/gallery/tunks';
import { RootState } from 'shared/store/store';
import { Select, SelectListItem } from 'shared/ui/select';
import { FilterTypeOptions } from '../config';
import './styles.scss';

export function FilterType() {
	const dispatch = useAppDispatch();

	const filterType = useAppSelector((state: RootState) => state.galleryReducer.filterType);

	const handleChange = (value: SelectListItem) => {
		dispatch(setFilterType(value));
		dispatch(fetchGalleryFeed());
	};

	return (
		<div className="filter-type">
			<span className="filter-type-label">TYPE</span>
			<Select
				className="filter-type-select"
				options={FilterTypeOptions}
				defaultValue={FilterTypeOptions.find((item) => item.value === filterType.value)}
				onChange={handleChange}
			/>
		</div>
	);
}
