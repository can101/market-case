import React from 'react';
import type { FC, ReactElement } from 'react';
// import styles from './favorites.module.scss';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import favoriteJson from '@assets/json/favorite.json';
import { useTranslation } from 'react-i18next';

const Favorites: FC = (): ReactElement => {
  const { t } = useTranslation();
  const emptyProps: IEmptyProps = {
    title: t('start_shopping'),
    infoMessage: t('empty_favorite_msg') as string,
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
