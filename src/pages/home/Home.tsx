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
import { useTranslation } from 'react-i18next';
import useReTitle from '@hooks/useReTitle';

const Home = (): ReactElement => {
  const { t } = useTranslation();
  const { productList, loading, notfound, dispatch } = useStore();

  const addToCart = (item: IProduct): void => {
    dispatch(actions.addBasket({ product: item, message: { cart_add_msg: t('toast_msg.add_to_cart') as string, cart_increase_msg: t('toast_msg.increase_product') as string } }));
  };
  const addFovorite = (item: IProduct): void => {
    dispatch(ProductActions.toogleIsFavorite({ product: item, message: { favorite_add_msg: t('toast_msg.add_to_favorite') as string, favorite_delete_msg: t('toast_msg.delete_to_favorite') as string } }));
  };
  useReTitle();
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
