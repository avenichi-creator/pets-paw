import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from 'shared/config/routes';
import { Layout } from 'shared/ui/layout';
import { BreedLoader } from 'widgets/breed-view';
import { BreedPage } from './breed-page';
import { DislikesPage } from './dislikes-page';
import { Error404Page } from './error-404-page';
import { FavPage } from './fav-page';
import { GalleryPage } from './gallery-page';
import { HomePage } from './home-page';
import { LikesPage } from './likes-page';
import { SearchPage } from './search-page';
import { VotingPage } from './voting-page';

const router = createBrowserRouter([
	{
		element: <Layout isInlineAside={true} className="home-page-layout" />,
		children: [
			{
				path: Routes.homePage,
				element: <HomePage />,
			},
		],
	},
	{
		element: <Layout />,
		children: [
			{
				path: Routes.breedPage,
				element: <BreedPage />,
				loader: BreedLoader,
			},
			{
				path: Routes.dislikesPage,
				element: <DislikesPage />,
			},
			{
				path: Routes.favPage,
				element: <FavPage />,
			},
			{
				path: Routes.galleryPage,
				element: <GalleryPage />,
			},
			{
				path: Routes.likesPage,
				element: <LikesPage />,
			},
			{
				path: Routes.searchPage,
				element: <SearchPage />,
			},
			{
				path: Routes.votingPage,
				element: <VotingPage />,
			},
		],
	},
	{
		path: '*',
		element: <Error404Page />,
	},
]);

export function Routing() {
	return <RouterProvider router={router} />;
}
