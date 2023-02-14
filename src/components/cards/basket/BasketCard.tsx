import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './basketcard.module.scss';
import ItemCounter from '../../item-counter';
import IconButton from '../../_atoms/buttons/circle-icon-button';
import { RiDeleteBin5Line } from 'react-icons/ri';

const BasketCard: FC = (): ReactElement => {
  const [count, setCount] = React.useState(1);
  const onIncrement = (): void => {
    setCount(count + 1);
  };
  const onDecrement = (): void => {
    setCount(count - 1);
  };
  return (
    <article className={styles.basketcard}>
      <div className={styles.basketcard__container}>
        <div className={styles.basketcard__container__item_image}>
          <img
            className={styles.basketcard__container__item_image__img}
            src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
        <div className={styles.basketcard__container__item__info}>
          <div className={styles.basketcard__container__item__info__title}>Product name</div>
          <div className={styles.basketcard__container__item__info__description}>Product description</div>
        </div>
        <div className={styles.basketcard__container__quantitiy_counter}>
          <ItemCounter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
        </div>
        <div className={styles.basketcard__container__price}>$ {(1.19 * count).toFixed(2)}</div>
        <div className={styles.basketcard__container__remove}>
          <IconButton
            size={'md'}
            icon={<RiDeleteBin5Line />}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default BasketCard;
