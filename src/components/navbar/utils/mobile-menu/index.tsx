import React, { type FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { RiMenu4Line } from 'react-icons/ri';
import { SlBasket } from 'react-icons/sl';
import CircleIconButton from '@_atoms/buttons/circle-icon-button';
import Modal from '@/components/modal';
import styles from './mobile-menu.module.scss';
import Logo from '@_atoms/logo';
import Switch from '@_atoms/form/toggle-switch';
import SelectBox from '@_atoms/form/select';
import { ICategory } from '@/types';

interface IMobileMenuProps {
  onClick: (path: string) => void;
}

const MobileMenu: FC<IMobileMenuProps> = ({ onClick }) => {
  const backgroundClick = (): void => {
    const element = document.querySelector('#modal_header button') as HTMLDivElement;
    element.click();
  };
  return (
    <Modal icon={<RiMenu4Line />} title={'menu'}>
      <div className={styles.container}>
        <ul className={styles.container__mobile_list}>
          <li className={styles.container__mobile_list__item}>
            <span
              onClick={() => {
                backgroundClick();
                onClick('/');
              }}
            >
              <Logo size={'md'} />
            </span>
          </li>
          <li className={styles.container__mobile_list__item}>
            <CircleIconButton
              size={'auto'}
              title={'favorites'}
              onClick={() => {
                backgroundClick();
                onClick('/favorites');
              }}
              icon={<AiFillHeart />}
            />
          </li>
          <li className={styles.container__mobile_list__item}>
            <CircleIconButton
              title="cart"
              quanttiy={2}
              size={'auto'}
              onClick={() => {
                backgroundClick();
                onClick('/cart');
              }}
              icon={<SlBasket />}
            />
          </li>
          <li className={styles.container__mobile_list__item}>
            <div className={styles.container__mobile_list__item__inner}>
              <span className={styles.container__mobile_list__item__inner__info_msg}>dark mode</span>
              <Switch
                size={'sm'}
                onClick={function (): void {
                  alert('switch');
                }}
              />
            </div>
          </li>
          <li className={styles.container__mobile_list__item}>
            <SelectBox
              placeholder={'Select Language'}
              options={[
                { id: 1, name: 'turkish' },
                { id: 2, name: 'english' },
              ]}
              value={''}
              onClick={function (e: React.MouseEvent<HTMLElement, MouseEvent>, item: ICategory): void {
                throw new Error('Function not implemented.');
              }}
              size={'auto'}
            />
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default MobileMenu;
