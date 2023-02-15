import React, { type FC, type ReactElement } from 'react';
import styles from './base.module.scss';
import BasketCard from '@components/cards/basket';
import FlatButton from '@_atoms/buttons/flat-button';
import { useTranslation } from 'react-i18next';

const Basket: FC = (): ReactElement => {
  const { t } = useTranslation();
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
            <div className={styles.basket__box__title}>{t('order_samuray')}</div>
            <div className={styles.basket__box__content}>
              <div className={styles.basket__box__content__price}>
                <div className={styles.basket__box__content__price__title}>{t('subtotal')}</div>
                <div className={styles.basket__box__content__price__value}>0.00</div>
              </div>
            </div>
          </div>
          <FlatButton
            size="lg"
            type="button"
            title={t('confirm_order') as string}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Basket;
