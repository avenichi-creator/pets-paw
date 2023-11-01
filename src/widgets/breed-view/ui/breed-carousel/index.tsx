import clsx from 'clsx';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.scss';

interface BreedCarouselProps {
	images: string[];
}

interface CustomDotProps {
	isActive: boolean;
	onClick: () => void;
}

function CustomDot(props: CustomDotProps) {
	const { isActive, onClick } = props;

	return (
		<li className={clsx('breed-carousel-dots-item', { active: isActive })} onClick={onClick} />
	);
}

export function BreedCarousel(props: BreedCarouselProps) {
	const { images } = props;

	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<div className="breed-carousel">
			<Carousel
				showArrows={false}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				selectedItem={currentSlide}
				onChange={(index) => setCurrentSlide(index)}
			>
				{images.map((item, index) => {
					return (
						<div key={index} className="breed-carousel-item">
							<img className="breed-carousel-img" src={item} alt="" />
						</div>
					);
				})}
			</Carousel>
			<ul className="breed-carousel-dots">
				{images.map((_, index) => {
					return (
						<CustomDot
							key={index}
							isActive={index === currentSlide}
							onClick={() => setCurrentSlide(index)}
						/>
					);
				})}
			</ul>
		</div>
	);
}
