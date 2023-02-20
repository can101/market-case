import styles from './base.module.scss';
import ProductCard from '@components/cards/product';
import { IoMdClose } from 'react-icons/io';
import { IProduct } from '@_types/index';
import { actions } from '@store/basket';
import { useStore } from '@hooks/useStore';
import { actions as ProductActions } from '@store/products';

const Basket = () => {
  const { productList, favoriteList, dispatch } = useStore();
  function addToCart(item: IProduct) {
    dispatch(actions.addBasket({ product: item }));
  }
  function deleteFavorite(item: IProduct) {
    dispatch(ProductActions.toogleIsFavorite({ product: item }));
  }

  return (
    <div>
      <section className={styles.home__products}>
        {favoriteList.map((item: IProduct) => (
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
