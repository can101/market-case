import React from 'react';
import styles from './navbar.module.scss';
import Logo from '../../components/_atoms/logo';
import { AiFillHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { RiMenu4Line } from 'react-icons/ri';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import CircleIconButton from '../_atoms/buttons/circle-icon-button';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modal';

function Navbar(): JSX.Element {
  const navigate = useNavigate();
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
                  navigate('/favorites');
                }}
                icon={<AiFillHeart />}
              />
            </li>
            <li className={styles.navbar__list__buttons__item}>
              <CircleIconButton
                quanttiy={2}
                size={'lg'}
                onClick={() => {
                  navigate('/basket');
                }}
                icon={<SlBasket />}
              />
            </li>
          </ul>
        </li>
        <li className={styles.navbar__mobile_buttons}>
          {/* <CircleIconButton
            size={'md'}
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            icon={isDarkMode ? <CgClose /> : <RiMenu4Line />}
          /> */}
          <Modal icon={<RiMenu4Line />}>
            <h1>hello</h1>
          </Modal>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
