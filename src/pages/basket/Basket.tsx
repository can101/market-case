import React from 'react';
import styles from './basket.module.scss';
import Base from '@layouts/basket';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import cartJson from '@assets/json/cart.json';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

function Basket(): JSX.Element {
  const cart = useSelector((state: RootState) => state.basket);
  const { t } = useTranslation();
  const emptyProps: IEmptyProps = {
    title: t('start_shopping'),
    infoMessage: t('cart.empty_cart_msg'),
    path: '/',
    srcjson: cartJson,
  };
  return (
    <div className={styles.basket_container}>
      {cart.length > 0 && <Base />}
      {cart.length === 0 && <EmptyLayout {...emptyProps} />}
    </div>
  );
}

export default Basket;
