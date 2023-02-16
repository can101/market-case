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
import Nodata from '@components/no-data';
import { actions } from '@store/basket';

const Home = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect((): void => {
    console.log('Home page');
    void dispatch(getAllProductsAsyncThunk());
  }, []);

  const { items, loading, notfound } = useSelector((state: RootState) => state.products);

  const addToCart = (item: IProduct): void => {
    dispatch(actions.addBasket({ product: item }));
  };

  return (
    <div className={styles.home}>
      {Boolean(loading) && <Spinner />}
      {!loading && (
        <>
          <Filter />
          <section className={styles.home__products}>
            {notfound && <Nodata size={70} />}
            {!notfound &&
              items.map((item: IProduct) => (
                <ProductCard
                  icon={<AiOutlineHeart />}
                  key={item.id}
                  item={item}
                  onIconClick={function (): void {
                    alert('clicked');
                  }}
                  onButtonClick={()=>{
                    addToCart(item);
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
