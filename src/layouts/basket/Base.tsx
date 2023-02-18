import React, { useEffect, type FC, type ReactElement } from 'react';
import styles from './base.module.scss';
import BasketCard from '@components/cards/basket';
import FlatButton from '@_atoms/buttons/flat-button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { IProduct } from '@_types/index';
import { actions } from '@store/basket';
import { addFavoriteItem } from '@store/favorites';
import { useNavigate } from 'react-router-dom';

const Basket: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cart = useSelector((state: RootState) => state.basket);
  const total: number = cart.items.reduce((acc: number, b: IProduct) => acc + (b.price * (b.count as number)), 0).toFixed(2) as unknown as number;
  return (
    <div className={styles.basket}>
      <div className={styles.basket__box}>
        {cart.items.map((item: IProduct, index: number) => (
          <BasketCard
            key={index}
            item={item}
            decrement={function (): void {
              dispatch(actions.updateBasketItemCount({ product: item, num: -1 }));
            }}
            increment={function (): void {
              dispatch(actions.updateBasketItemCount({ product: item, num: 1 }));
            }}
            deleteItem={function (): void {
              dispatch(actions.deleteBasket({ product: item }));
            }}
            addFavorite={function (): void {
              dispatch(addFavoriteItem({ product: item }));
            }}
          />
        ))}
      </div>
      <div className={styles.basket__box}>
        <div className={styles.basket__box__wrapper}>
          <div className={styles.basket__card_box}>
            <div className={styles.basket__box__title}>{t('order_samuray')}</div>
            <div className={styles.basket__box__content}>
              <div className={styles.basket__box__content__price}>
                <div className={styles.basket__box__content__price__title}>{t('subtotal')}</div>
                <div className={styles.basket__box__content__price__value}>{total}</div>
              </div>
            </div>
          </div>
          <FlatButton
            size="lg"
            type="button"
            title={t('confirm_order') as string}
            onClick={() => {
              navigate('/delivery-info');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Basket;
