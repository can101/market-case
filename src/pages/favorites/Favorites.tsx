import React from 'react';
import type { FC, ReactElement } from 'react';
// import styles from './favorites.module.scss';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import favoriteJson from '@assets/json/favorite.json';

const Favorites: FC = (): ReactElement => {
  const emptyProps: IEmptyProps = {
    title: 'start shopping',
    infoMessage: 'Your Favorites List Is Not Yet Empty',
    path: '/',
    srcjson: favoriteJson,
  };
  return (
    <>
      <EmptyLayout {...emptyProps} />
    </>
  );
};

export default Favorites;
