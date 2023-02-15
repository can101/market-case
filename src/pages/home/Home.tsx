import React, { useEffect, memo, type ReactElement } from 'react';
import styles from './home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAsyncThunk } from '@store/products/getAllProductsAsyncThunk';
import type { RootState, AppDispatch } from '@/store';
import type { IProduct } from '@/types';
import ProductCard from '@components/cards/product';
import Service from '@components/service';
import Spinner from '@_atoms/spinner';
import NewsLetter from '@components/newsletter';
import { AiOutlineHeart } from 'react-icons/ai';
import Filter from '@components/filter';

const Home = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect((): void => {
    console.log('Home page');
    void dispatch(getAllProductsAsyncThunk());
  }, []);

  const { items, loading } = useSelector((state: RootState) => state.products);

  return (
    <div className={styles.home}>
      {Boolean(loading) && <Spinner />}
      {!loading && (
        <>
          <Filter />
          <section className={styles.home__products}>
            {items.map((item: IProduct) => (
              <ProductCard
                icon={<AiOutlineHeart />}
                key={item.id}
                item={item}
                onIconClick={function (): void {
                  alert('clicked');
                }}
                onButtonClick={function (): void {
                  alert('clicked');
                }}
              />
            ))}
          </section>
        </>
      )}
      <Service />
      <NewsLetter />
    </div>
  );
};

export default memo(Home);
