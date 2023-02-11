import React from 'react';
import Basket from '../pages/basket';
import Home from '../pages/home';
import Favorites from '../pages/favorites';
import PageNotFound from '../pages/page-not-found';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/basket',
    element: <Basket />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default router;
