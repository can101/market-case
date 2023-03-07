import styles from './base.module.scss';
import ProductCard from '@components/cards/product';
import { IoMdClose } from 'react-icons/io';
import { IProduct } from '@_types/index';
import { actions } from '@store/basket';
import { useStore } from '@hooks/useStore';
import { actions as ProductActions } from '@store/products';
import { useTranslation } from 'react-i18next';

const Basket = () => {
  const { t } = useTranslation();
  const { productList, favoriteList, dispatch } = useStore();
  function addToCart(item: IProduct) {
    dispatch(actions.addBasket({ product: item, message: { cart_add_msg: t('toast_msg.add_to_cart') as string, cart_increase_msg: t('toast_msg.increase_product') as string } }));
  }
  function deleteFavorite(item: IProduct) {
    dispatch(ProductActions.toogleIsFavorite({ product: item, message: { favorite_add_msg: t('toast_msg.add_to_favorite') as string, favorite_delete_msg: t('toast_msg.delete_to_favorite') as string } }));
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
