import { type ReactElement, type FC } from 'react';
import styles from './navbar.module.scss';
import Logo from '@_atoms/logo';
import { AiFillHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { IoSettingsOutline } from 'react-icons/io5';
import CircleIconButton from '@_atoms/buttons/circle-icon-button';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from './utils/mobile-menu';
import { useTheme } from '@hooks/useTheme';
import Setting from './utils/setting';

const Navbar: FC = (): ReactElement => {
  const navigate = useNavigate();
  const goToPath = (path: string): void => {
    navigate(path);
  };
  const [isDarkMode, setTheme] = useTheme();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__brand}>
          <Link to={'/'}>
            <Logo size="md" />
          </Link>
        </li>
        <li className={styles.navbar__desktop_buttons}>
          <ul className={styles.navbar__list__buttons}>
            <li className={styles.navbar__list__buttons__item}>
              <Setting onClick={goToPath} />
            </li>
            <li className={styles.navbar__list__buttons__item}>
              <CircleIconButton
                quanttiy={0}
                size={'md'}
                onClick={() => {
                  goToPath('/favorites');
                }}
                icon={<AiFillHeart />}
              />
            </li>
            <li className={styles.navbar__list__buttons__item}>
              <CircleIconButton
                quanttiy={0}
                size={'md'}
                onClick={() => {
                  goToPath('/cart');
                }}
                icon={<SlBasket />}
              />
            </li>
          </ul>
        </li>
        <li className={styles.navbar__mobile_buttons}>
          <MobileMenu onClick={goToPath} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
