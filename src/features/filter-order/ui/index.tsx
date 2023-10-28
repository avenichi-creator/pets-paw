import React from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setFilterOrder } from 'shared/store/gallery/reducer';
import { fetchGalleryFeed } from 'shared/store/gallery/tunks';
import { RootState } from 'shared/store/store';
import { Select, SelectListItem } from 'shared/ui/select';
import { FilterOrderOptions } from '../config';
import './styles.scss';

export function FilterOrder() {
	const dispatch = useAppDispatch();

	const filterOrder = useAppSelector((state: RootState) => state.galleryReducer.filterOrder);

	const handleChange = (value: SelectListItem) => {
		dispatch(setFilterOrder(value));
		dispatch(fetchGalleryFeed());
	};

	return (
		<div className="filter-order">
			<span className="filter-order-label">ORDER</span>
			<Select
				className="filter-order-select"
				options={FilterOrderOptions}
				defaultValue={FilterOrderOptions.find((item) => item.value === filterOrder.value)}
				onChange={handleChange}
			/>
		</div>
	);
}
