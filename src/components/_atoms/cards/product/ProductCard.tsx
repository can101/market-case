import React from 'react';
import type {FC, ReactElement} from 'react';
import styles from './productcard.module.scss';
import type {IProduct} from "../../../../types";
import Button from "../../buttons/circle-icon-button";
import {AiOutlineHeart} from "react-icons/ai";
import FlatButton from "../../buttons/flat-button";

export interface IProductCardProps {
    item: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({item}): ReactElement => {
    return (
        <article className={styles.productCard}>
            <div className={styles.productCard__wrapper}>
                <span className={styles.productCard__heart_box}>
                    <Button icon={<AiOutlineHeart/>} onClick={() => {
                        window.alert("Added to favorites " + item.name);
                    }
                    }/>
                </span>
                <img className={styles.productCard__image} src={item.image_url}/>
            </div>
            <div className={styles.productCard__content}>
                <div className={styles.productCard__title}>{item.name}</div>
                <div className={styles.productCard__description}>{item.description}</div>
                <div className={styles.productCard__batches}>
                    <span className={styles.productCard__price}>{item.price}</span>
                    <span className={styles.productCard__category}>{item.category}</span>
                </div>
                <FlatButton onClick={() => {
                    alert(item.name + " added to cart")
                }} title={"Add to cart"}/>
            </div>
        </article>
    );
}

export default ProductCard;
