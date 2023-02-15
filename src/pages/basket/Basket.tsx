import React from 'react';
import styles from './basket.module.scss';
import Base from './utils/layout/base';
import EmptyLayout, { type IEmptyProps } from '@layouts/empty';
import cartJson from '@assets/json/cart.json';

function Basket(): JSX.Element {
  const emptyProps: IEmptyProps = {
    title: 'start shopping',
    infoMessage: 'Your cart is empty',
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
