import React from 'react';
import Basket from '@pages/basket';
import Home from '@pages/home';
import Favorites from '@pages/favorites';
import PageNotFound from '@pages/page-not-found';
import DeliveryInfo from '@pages/delivery-info';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Basket />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/delivery-info',
    element: <DeliveryInfo />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default router;
