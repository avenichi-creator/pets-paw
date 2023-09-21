import galleryImg from 'shared/assets/nav/images-search.png';
import breedsImg from 'shared/assets/nav/pet-breeds.png';
import votingImg from 'shared/assets/nav/vote-table.png';
import { Routes } from './routes';

export interface NavCardProps {
	path: string;
	img: string;
	title: string;
	isActive?: boolean;
}

export const NavData: NavCardProps[] = [
	{
		path: Routes.votingPage,
		img: votingImg,
		title: 'VOTING',
	},
	{
		path: Routes.breedsPage,
		img: breedsImg,
		title: 'BREEDS',
	},
	{
		path: Routes.galleryPage,
		img: galleryImg,
		title: 'GALLERY',
	},
];
