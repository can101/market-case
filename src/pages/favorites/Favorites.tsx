import { FC, ReactElement, memo } from 'react';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import favoriteJson from '@assets/json/favorite.json';
import { useTranslation } from 'react-i18next';
import Base from '@layouts/favorite';
import { useStore } from '@hooks/useStore';
import useReTitle from '@hooks/useReTitle';

const Favorites: FC = (): ReactElement => {
  const { t } = useTranslation();
  const emptyProps: IEmptyProps = {
    title: t('start_shopping'),
    infoMessage: t('empty_favorite_msg') as string,
    path: '/',
    srcjson: favoriteJson,
  };
  const { favoritesLength } = useStore();
  useReTitle('pages.favorites');
  return (
    <>
      {favoritesLength > 0 && <Base />}
      {favoritesLength === 0 && <EmptyLayout {...emptyProps} />}
    </>
  );
};

export default memo(Favorites);
