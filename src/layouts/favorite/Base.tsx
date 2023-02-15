import React from 'react';
import styles from './base.module.scss';
import ProductCard from '@components/cards/product';
import { IoMdClose } from 'react-icons/io';

const item = {
  id: 1,
  name: 'Apple',
  description: 'A juicy and tasty red apple.',
  price: 0.99,
  category: 'Fruit',
  image_url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
};

function Basket(): JSX.Element {
  return (
    <div className={styles.bg_dark}>
      <ProductCard
        item={item}
        icon={<IoMdClose />}
        onButtonClick={(): void => {
          console.log('clicked');
        }}
        onIconClick={(): void => {
          console.log('clicked');
        }}
      />
    </div>
  );
}

export default Basket;
