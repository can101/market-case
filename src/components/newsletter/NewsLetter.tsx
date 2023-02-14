import React from 'react';
import { FiSend } from 'react-icons/fi';
import Input from '../_atoms/form/input';
import styles from './newsletter.module.scss';

function Navbar(): JSX.Element {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__inner_content}>
        <h2 className={styles.newsletter__title}>Newsletter</h2>
        <p className={styles.newsletter__description}>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div className={styles.newsletter__form}>
          <Input
            type={'email'}
            icon={<FiSend />}
            placeholder={'Your email address'}
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
