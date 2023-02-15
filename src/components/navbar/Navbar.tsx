import React, { type ReactElement, type FC } from 'react';
import styles from './navbar.module.scss';
import Logo from '@_atoms/logo';
import { AiFillHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import CircleIconButton from '@_atoms/buttons/circle-icon-button';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from './utils/mobile-menu';

const Navbar: FC = (): ReactElement => {
  const navigate = useNavigate();
  const goToPath = (path: string): void => {
    navigate(path);
  };
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__brand}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </li>
        <li className={styles.navbar__desktop_buttons}>
          <ul className={styles.navbar__list__buttons}>
            <li className={styles.navbar__list__buttons__item}>
              <CircleIconButton
                size={'lg'}
                onClick={() => {
                  const html = document.querySelector('html');
                  html?.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
                  setIsDarkMode(!isDarkMode);
                }}
                icon={isDarkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
              />
            </li>
            <li className={styles.navbar__list__buttons__item}>
              <CircleIconButton
                size={'lg'}
                onClick={() => {
                  goToPath('/favorites');
                }}
                icon={<AiFillHeart />}
              />
            </li>
            <li className={styles.navbar__list__buttons__item}>
              <CircleIconButton
                quanttiy={2}
                size={'lg'}
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
