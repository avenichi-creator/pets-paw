import React from 'react';
import { FilterBreed } from 'features/filter-breed';
import { FilterLimit } from 'features/filter-limit';
import { FilterOrder } from 'features/filter-order';
import { FilterType } from 'features/filter-type';
import './styles.scss';

export function GalleryFilter() {
	return (
		<section className="gallery-filter">
			<FilterOrder />
			<FilterType />
			<FilterBreed />
			<FilterLimit />
		</section>
	);
}
