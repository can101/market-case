import React from 'react';
import styles from './footer.module.scss';
import type { FC, ReactElement, ReactNode } from 'react';
// icons import start here
import { IconContext } from 'react-icons';
import { FaCcVisa, FaCcMastercard, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
// icons import end here

interface IData {
  id: number;
  icon?: ReactNode;
}

const Footer: FC = (): ReactElement => {
  const { t } = useTranslation();
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
          <h3 className={styles.footer__top__colmn__title}>{t('footer.information')}</h3>
          <ul className={styles.footer__top__colmn__wrapper}>
            <li className={styles.footer__top__colmn__link}>{t('footer.about_us')}</li>
            <li className={styles.footer__top__colmn__link}>{t('footer.delivery_information')}</li>
            <li className={styles.footer__top__colmn__link}>{t('footer.privacy_policy')}</li>
            <li className={styles.footer__top__colmn__link}>{t('footer.term_condition')}</li>
          </ul>
        </div>
        <div className={styles.footer__top__colmn}>
          <h3 className={styles.footer__top__colmn__title}>{t('footer.customer_sevice')}</h3>
          <ul className={styles.footer__top__colmn__wrapper}>
            <li className={styles.footer__top__colmn__link}>{t('footer.contact_us')}</li>
          </ul>
        </div>
        <div className={styles.footer__top__colmn}>
          <h3 className={styles.footer__top__colmn__title}>{t('footer.account_info')}</h3>
          <ul className={styles.footer__top__colmn__wrapper}>
            <li className={styles.footer__top__colmn__link}>{t('footer.my_account')}</li>
            <li className={styles.footer__top__colmn__link}>{t('footer.order_history')}</li>
            <li className={styles.footer__top__colmn__link}>{t('footer.whish_list')}</li>
            <li className={styles.footer__top__colmn__link}>{t('footer.newsletter')}</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p className={styles.footer__copyright__text}>{t('footer.rights')}</p>
      </div>
      <div className={styles.footer__social_list}>
        <span className={styles.footer__social_list__title}>{t('footer.flow_us')}</span>
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
