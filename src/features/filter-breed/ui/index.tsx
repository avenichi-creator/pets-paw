import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setFilterBreed } from 'shared/store/gallery/reducer';
import { fetchBreedList, fetchGalleryFeed } from 'shared/store/gallery/tunks';
import { RootState } from 'shared/store/store';
import { Select } from 'shared/ui/select';
import { SelectListItem } from 'shared/ui/select';
import './styles.scss';

export function FilterBreed() {
	const dispatch = useAppDispatch();

	const breedList = useAppSelector((state: RootState) => state.galleryReducer.breedList);
	const filterBreed = useAppSelector((state: RootState) => state.galleryReducer.filterBreed);

	useEffect(() => {
		dispatch(fetchBreedList());
	}, []);

	const handleChange = (value: SelectListItem) => {
		dispatch(setFilterBreed(value));
		dispatch(fetchGalleryFeed());
	};

	return (
		<div className="filter-breed">
			<span className="filter-breed-label">BREED</span>
			<Select
				className="filter-breed-select"
				options={breedList}
				defaultValue={breedList.find(
					(item) => item.label === filterBreed.label && item.value === filterBreed.value,
				)}
				onChange={handleChange}
			/>
		</div>
	);
}
