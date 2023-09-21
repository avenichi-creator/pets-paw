import React from 'react';
import girlAndPet from 'shared/assets/general/girl-and-pet.png';
import './styles.scss';

export function HomePage() {
	return (
		<section className="home-page">
			<div className="home-page-img-wrapper">
				<img src={girlAndPet} alt="girl and pet" className="home-page-img" />
			</div>
		</section>
	);
}
