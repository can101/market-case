import React, { type FC, type ReactElement } from 'react';
import styles from './service.module.scss';
// image import area start
import box from '../../assets/images/svg/icons/box.svg';
import truck from '../../assets/images/svg/icons/truck.svg';
import lock from '../../assets/images/svg/icons/lock.svg';
import phone from '../../assets/images/svg/icons/phone.svg';
// image import area end

interface IServiceItem {
  img: string;
  title: string;
}

const serviceItems: IServiceItem[] = [
  {
    img: truck,
    title: 'Free Shipping',
  },
  {
    img: lock,
    title: 'secure shopping',
  },
  {
    img: box,
    title: 'easy return',
  },
  {
    img: phone,
    title: 'communication',
  },
];

const Service: FC = (): ReactElement => {
  return (
    <section className={styles.service}>
      <div className={styles.service__container}>
        <ul className={styles.service__wrapper}>
          {serviceItems.map((item: IServiceItem, index: number) => (
            <li key={index} className={styles.service__item}>
              <div className={styles.service__inner_content}>
                <img src={item.img} className={styles.service__image} />
                <h3 className={styles.service__title}>{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
