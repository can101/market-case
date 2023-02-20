import styles from './basket.module.scss';
import Base from '@layouts/basket';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import cartJson from '@assets/json/cart.json';
import { useTranslation } from 'react-i18next';
import { useStore } from '@hooks/useStore';
import { memo } from 'react';

function Basket(): JSX.Element {
  const { basketLength } = useStore();
  const { t } = useTranslation();
  const emptyProps: IEmptyProps = {
    title: t('start_shopping'),
    infoMessage: t('cart.empty_cart_msg'),
    path: '/',
    srcjson: cartJson,
  };
  return (
    <div className={styles.basket_container}>
      {basketLength > 0 && <Base />}
      {basketLength === 0 && <EmptyLayout {...emptyProps} />}
    </div>
  );
}

export default memo(Basket);
