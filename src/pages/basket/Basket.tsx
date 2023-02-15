import React from 'react';
import styles from './basket.module.scss';
import Base from '../../layouts/basket';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import cartJson from '@assets/json/cart.json';
import { useTranslation } from 'react-i18next';

function Basket(): JSX.Element {
  const { t } = useTranslation();
  const emptyProps: IEmptyProps = {
    title: t('start_shopping'),
    infoMessage: t('empty_cart_msg'),
    path: '/',
    srcjson: cartJson,
  };
  return (
    <div className={styles.basket_container}>
      {/* <Base /> */}
      <EmptyLayout {...emptyProps} />
    </div>
  );
}

export default Basket;
