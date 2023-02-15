import React from 'react';
import styles from './base.module.scss';
import BasketCard from '@components/cards/basket';
import FlatButton from '@_atoms/buttons/flat-button';

function Basket(): JSX.Element {
  return (
    <div className={styles.basket}>
      <div className={styles.basket__box}>
        <BasketCard />
        <BasketCard />
        <BasketCard />
      </div>
      <div className={styles.basket__box}>
        <div className={styles.basket__box__wrapper}>
          <div className={styles.basket__card_box}>
            <div className={styles.basket__box__title}>Order Summary</div>
            <div className={styles.basket__box__content}>
              <div className={styles.basket__box__content__price}>
                <div className={styles.basket__box__content__price__title}>Subtotal</div>
                <div className={styles.basket__box__content__price__value}>$ 0.00</div>
              </div>
            </div>
          </div>
          <FlatButton
            size='lg'
            type="button"
            title={'confirm cart'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Basket;
