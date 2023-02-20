import React from 'react';
import styles from './productcard.module.scss';
import type { FC, ReactElement } from 'react';
import type { IProduct } from '@/types';
import Button from '@_atoms/buttons/circle-icon-button';
import FlatButton from '@_atoms/buttons/flat-button';
import { useTranslation } from 'react-i18next';

export interface IProductCardProps {
  item: IProduct;
  icon: ReactElement;
  onIconClick: () => void;
  onButtonClick: () => void;
}

const ProductCard: FC<IProductCardProps> = ({ item, icon, onButtonClick, onIconClick }): ReactElement => {
  const { t } = useTranslation();
  return (
    <article className={styles.productCard}>
      <div className={styles.productCard__wrapper}>
        <span className={styles.productCard__heart_box}>
          <Button size={'md'} icon={icon} onClick={onIconClick} />
        </span>
        <img loading={'lazy'} className={styles.productCard__image} src={item.image_url} />
      </div>
      <div className={styles.productCard__content}>
        <div className={styles.productCard__title}>{item.name}</div>
        <div className={styles.productCard__description}>{item.description}</div>
        <div className={styles.productCard__batches}>
          <span className={styles.productCard__price}>{item.price}</span>
          <span className={styles.productCard__category}>{item.category}</span>
        </div>
        <FlatButton onClick={onButtonClick} title={t('product_card.add_to_cart') as string} />
      </div>
    </article>
  );
};

export default ProductCard;
