import { type FC, type ReactElement } from 'react';
import styles from './base.module.scss';
import BasketCard from '@components/cards/basket';
import FlatButton from '@_atoms/buttons/flat-button';
import { useTranslation } from 'react-i18next';
import { IProduct } from '@_types/index';
import { actions } from '@store/basket';
import { actions as Products } from '@store/products';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@hooks/useStore'
import { toast } from 'react-hot-toast';

const Basket: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { basketList, basketLength, dispatch } = useStore()
  const total: number = basketList.reduce((acc: number, b: IProduct) => acc + (b.price * (b.count as number)), 0).toFixed(2) as unknown as number;
  return (
    <div className={styles.basket__container}>
      <div className={styles.basket__container__inner}>
        <div className={styles.basket__header__info}>
          <span className={styles.basket__header__info__text}>
            {t('cart.my_cart', { count: basketLength })}
          </span>
        </div>
        <div className={styles.basket}>
          <div className={styles.basket__box}>
            {basketList.map((item: IProduct, index: number) => (
              <BasketCard
                key={index}
                item={item}
                decrement={function (): void {
                  dispatch(actions.updateBasketItemCount({ product: item, num: -1, message: { cart_increase_msg: t('toast_msg.increase_product') as string, cart_decrease_msg: t('toast_msg.decrease_product') as string } }));
                }}
                increment={function (): void {
                  dispatch(actions.updateBasketItemCount({ product: item, num: 1, message: { cart_increase_msg: t('toast_msg.increase_product') as string, cart_decrease_msg: t('toast_msg.decrease_product') as string } }));
                }}
                deleteItem={function (): void {
                  dispatch(actions.deleteBasket({ product: item, message: { cart_delete_msg: t('toast_msg.delte_to_cart') as string } }));
                }}
                addFavorite={function (): void {
                  dispatch(Products.toogleIsFavorite({ product: item, message: { favorite_add_msg: t('toast_msg.add_to_favorite') as string, favorite_delete_msg: t('toast_msg.delete_to_favorite') as string } }));
                }}
              />
            ))}
          </div>
          <div className={styles.basket__box}>
            <div className={styles.basket__box__wrapper}>
              <div className={styles.basket__card_box}>
                <div className={styles.basket__box__title}>{t('cart.order_samuray')}</div>
                <div className={styles.basket__box__content}>
                  <div className={styles.basket__box__content__price}>
                    <div className={styles.basket__box__content__price__title}>{t('cart.subtotal')}</div>
                    <div className={styles.basket__box__content__price__value}>{total}</div>
                  </div>
                </div>
              </div>
              <FlatButton
                size="lg"
                type="button"
                title={t('cart.confirm_order') as string}
                onClick={() => {
                  toast.success(t('toast_msg.confirm_order'))
                  navigate('/delivery-info');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
