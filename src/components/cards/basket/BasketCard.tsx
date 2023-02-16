import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './basketcard.module.scss';
import ItemCounter from '@components/item-counter';
import IconButton from '@_atoms/buttons/circle-icon-button';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { IProduct } from '@_types/index';
import BasketModal from '@layouts/basket-modal';

interface IBasketCardProps {
  item: IProduct;
  decrement: () => void;
  increment: () => void;
  deleteItem: () => void;
}

const BasketCard: FC<IBasketCardProps> = ({ item, decrement, increment, deleteItem }): ReactElement => {
  return (
    <article className={styles.basketcard}>
      <div className={styles.basketcard__container}>
        <div className={styles.basketcard__container__item_image}>
          <img className={styles.basketcard__container__item_image__img} src={item.image_url} />
        </div>
        <div className={styles.basketcard__container__item__info}>
          <div className={styles.basketcard__container__item__info__title}>{item.name}</div>
          <div className={styles.basketcard__container__item__info__description}>{item.description}</div>
        </div>
        <div className={styles.basketcard__container__quantitiy_counter}>
          <ItemCounter count={item.count as number} onIncrement={increment} onDecrement={decrement} />
        </div>
        <div className={styles.basketcard__container__price}>$ {(item.price * (item.count as number)).toFixed(2) as string}</div>
        <div className={styles.basketcard__container__remove}>
          <BasketModal
            onClickDelete={deleteItem}
            onClickAdd={() => {
              console.log('add to favorite');
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default BasketCard;
