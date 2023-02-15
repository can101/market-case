import React from 'react';
import { FiSend } from 'react-icons/fi';
import Input from '@_atoms/form/input';
import styles from './newsletter.module.scss';
import { useTranslation } from 'react-i18next';

function Navbar(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__inner_content}>
        <h2 className={styles.newsletter__title}>{t('newsLetter.title')}</h2>
        <p className={styles.newsletter__description}>{t('newsLetter.description')}</p>
        <div className={styles.newsletter__form}>
          <Input
            type={'email'}
            icon={<FiSend />}
            placeholder={t('newsLetter.placeholder') as string}
            value={''}
            onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
