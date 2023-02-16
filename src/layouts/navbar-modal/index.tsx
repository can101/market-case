import type { FC, ReactNode } from 'react';
import Modal from '@/components/modal';
import styles from './mobile-menu.module.scss';
import Logo from '@_atoms/logo';
import Switch from '@_atoms/form/toggle-switch';
import SelectBox from '@_atoms/form/select';
import { ICategory } from '@/types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@hooks/useTheme';
import { IoSettingsOutline } from 'react-icons/io5';
import CircleIconButton from '@components/_atoms/buttons/circle-icon-button';
import { AiFillHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

interface INavbarModalProps {
  onClick: (path: string) => void;
  isShow?: boolean;
  icon: ReactNode;
}

interface IMobileMenuProps {
  onClick: (path: string) => void;
  backgroundClick?: () => void;
}

const MobileMenu: FC<IMobileMenuProps> = ({
  onClick,
  backgroundClick = () => {
    console.log('hello');
  },
}) => {
  const { t } = useTranslation();
  const cart = useSelector((state: RootState) => state.basket);
  return (
    <>
      <li className={`${styles.container__mobile_list__item} ${styles.container__mobile_list__item__only_mobile}`}>
        <CircleIconButton
          size={'auto'}
          title={t('navbar.favorites') as string}
          onClick={() => {
            backgroundClick();
            onClick('/favorites');
          }}
          icon={<AiFillHeart />}
        />
      </li>
      <li className={`${styles.container__mobile_list__item} ${styles.container__mobile_list__item__only_mobile}`}>
        <CircleIconButton
          title={t('navbar.cart') as string}
          size={'auto'}
          quanttiy={cart.length}
          onClick={() => {
            backgroundClick();
            onClick('/cart');
          }}
          icon={<SlBasket />}
        />
      </li>
    </>
  );
};

const NavbarModal: FC<INavbarModalProps> = ({ onClick, isShow = false, icon }) => {
  const { t, i18n } = useTranslation();
  const backgroundClick = (): void => {
    const element = document.querySelector('#modal_header button') as HTMLDivElement;
    element.click();
  };
  const [isDarkMode, setTheme] = useTheme();
  return (
    <Modal icon={icon} title={t('navbar.title') as string}>
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
          {isShow && <MobileMenu onClick={onClick} backgroundClick={backgroundClick} />}
          <li className={styles.container__mobile_list__item}>
            <div className={styles.container__mobile_list__item__inner}>
              <span className={styles.container__mobile_list__item__inner__info_msg}>{t('theme_info', { value: !isDarkMode ? 'light' : 'dark' })}</span>
              <Switch size={'sm'} onClick={setTheme} cstate={isDarkMode} />
            </div>
          </li>
          <li className={styles.container__mobile_list__item}>
            <SelectBox
              placeholder={t('slect_language.language') as string}
              options={[
                { id: 1, name: t('slect_language.turkish') as string, base: 'tr' },
                { id: 2, name: t('slect_language.english') as string, base: 'en' },
              ]}
              value={{ id: 2, name: t('language') as string }}
              onClick={function (item: ICategory): void {
                i18n.changeLanguage(item.base);
              }}
              size={'auto'}
            />
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default NavbarModal;
