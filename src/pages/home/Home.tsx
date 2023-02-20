import { memo, type ReactElement } from 'react';
import styles from './home.module.scss';
import type { IProduct } from '@/types';
import ProductCard from '@components/cards/product';
import Service from '@components/service';
import Spinner from '@_atoms/spinner';
import NewsLetter from '@components/newsletter';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Filter from '@components/filter';
import Nodata from '@components/no-data';
import { actions } from '@store/basket';
import { actions as ProductActions } from '@store/products';
import { useStore } from '@hooks/useStore';

const Home = (): ReactElement => {
  const { productList, loading, notfound, dispatch } = useStore();

  const addToCart = (item: IProduct): void => {
    dispatch(actions.addBasket({ product: item }));
  };
  const addFovorite = (item: IProduct): void => {
    dispatch(ProductActions.toogleIsFavorite({ product: item }));
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
              productList.map((item: IProduct) => (
                <ProductCard
                  icon={!item.isFavorite ? <AiOutlineHeart /> : <AiFillHeart />}
                  key={item.id}
                  item={item}
                  onIconClick={() => {
                    addFovorite(item);
                  }}
                  onButtonClick={() => {
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
