import React from 'react';
import './styles.scss';

interface BreedInfoProps {
	breedName: string;
	breedDescription: string;
	breedTemperament: string;
	breedOrigin: string;
	breedWeight: string;
	breedLifeSpan: string;
}

export function BreedInfo(props: BreedInfoProps) {
	const { breedName, breedDescription, breedTemperament, breedOrigin, breedWeight, breedLifeSpan } =
		props;

	return (
		<section className="breed-info">
			<h1 className="breed-info-name">{breedName}</h1>
			<div className="breed-info-main">
				<p className="breed-info-description">{breedDescription}</p>
				<ul className="breed-info-list">
					<li className="breed-info-temperament">
						<p>
							<strong>Temperament: </strong>
							<span>{breedTemperament}</span>
						</p>
					</li>
					<li className="breed-info-origin">
						<p>
							<strong>Origin: </strong>
							<span>{breedOrigin}</span>
						</p>
					</li>
					<li className="breed-info-weight">
						<p>
							<strong>Weight: </strong>
							<span>{breedWeight} kg</span>
						</p>
					</li>
					<li className="breed-info-life">
						<p>
							<strong>Life span: </strong>
							<span>{breedLifeSpan} y</span>
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}
