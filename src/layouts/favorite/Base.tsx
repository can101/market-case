import React from 'react';
import styles from './base.module.scss';
import ProductCard from '@components/cards/product';
import { IoMdClose } from 'react-icons/io';
import { AppDispatch, RootState } from '@store/index';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '@_types/index';
import { actions } from '@store/basket';
import { deleteFavoriteItem } from '@store/favorites';

const Basket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, length } = useSelector((state: RootState) => state.favorites);
  function addToCart(item: IProduct) {
    dispatch(actions.addBasket({ product: item }));
  }
  function deleteFavorite(item: IProduct) {
    dispatch(deleteFavoriteItem({ product: item }));
  }

  return (
    <div>
      <section className={styles.home__products}>
        {items.map((item: IProduct) => (
          <ProductCard
            icon={<IoMdClose />}
            key={item.id}
            item={item}
            onIconClick={() => {
              deleteFavorite(item);
            }}
            onButtonClick={() => {
              addToCart(item);
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default Basket;
