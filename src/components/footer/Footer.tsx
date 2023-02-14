import React from 'react';
import styles from './footer.module.scss';
import type { FC, ReactElement, ReactNode } from 'react';
// icons import start here
import { IconContext } from 'react-icons';
import { FaCcVisa, FaCcMastercard, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// icons import end here

interface IData {
  id: number;
  icon?: ReactNode;
}

const Footer: FC = (): ReactElement => {
  const socialIcons: IData[] = [
    {
      id: 1,
      icon: <FaYoutube />,
    },
    {
      id: 2,
      icon: <FaInstagram />,
    },
    {
      id: 3,
      icon: <FaFacebook />,
    },
    {
      id: 4,
      icon: <FaTwitter />,
    },
  ];
  const paymentIcons: IData[] = [
    {
      id: 1,
      icon: <FaCcVisa />,
    },
    {
      id: 2,
      icon: <FaCcMastercard />,
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__colmn}>
          <h3 className={styles.footer__top__colmn__title}>Information</h3>
          <ul className={styles.footer__top__colmn__wrapper}>
            <li className={styles.footer__top__colmn__link}>About Us</li>
            <li className={styles.footer__top__colmn__link}>Delivery Information</li>
            <li className={styles.footer__top__colmn__link}>Privacy Policy</li>
            <li className={styles.footer__top__colmn__link}>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.footer__top__colmn}>
          <h3 className={styles.footer__top__colmn__title}>Customer Service</h3>
          <ul className={styles.footer__top__colmn__wrapper}>
            <li className={styles.footer__top__colmn__link}>Contact Us</li>
          </ul>
        </div>
        <div className={styles.footer__top__colmn}>
          <h3 className={styles.footer__top__colmn__title}>My Account</h3>
          <ul className={styles.footer__top__colmn__wrapper}>
            <li className={styles.footer__top__colmn__link}>My Account</li>
            <li className={styles.footer__top__colmn__link}>Order History</li>
            <li className={styles.footer__top__colmn__link}>Wish List</li>
            <li className={styles.footer__top__colmn__link}>Newsletter</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p className={styles.footer__copyright__text}>© 2023, All Rights Reserved</p>
      </div>
      <div className={styles.footer__social_list}>
        <span className={styles.footer__social_list__title}>Flow us</span>
        <IconContext.Provider value={{ size: '1.5em', className: styles.footer__social_list__icon }}>
          <ul className={styles.footer__social_list__wrapper}>
            {socialIcons.map((item) => {
              return (
                <li className={styles.footer__social_list__list_item} key={item.id}>
                  {item.icon}
                </li>
              );
            })}
          </ul>
        </IconContext.Provider>
      </div>
      <div className={styles.footer__payment_methods}>
        <IconContext.Provider value={{ size: '1.9em', className: styles.footer__payment_methods__icon }}>
          <ul className={styles.footer__payment_methods__wrapper}>
            {paymentIcons.map((item) => {
              return (
                <li className={styles.footer__payment_methods__list_item} key={item.id}>
                  {item.icon}
                </li>
              );
            })}
          </ul>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
