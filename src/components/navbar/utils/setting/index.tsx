import React, { type FC } from 'react';
import Modal from '@/components/modal';
import styles from './mobile-menu.module.scss';
import Logo from '@_atoms/logo';
import Switch from '@_atoms/form/toggle-switch';
import SelectBox from '@_atoms/form/select';
import { ICategory } from '@/types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@hooks/useTheme';
import { IoSettingsOutline } from 'react-icons/io5';

interface IMobileMenuProps {
  onClick: (path: string) => void;
}

const Setting: FC<IMobileMenuProps> = ({ onClick }) => {
  const { t, i18n } = useTranslation();
  const backgroundClick = (): void => {
    const element = document.querySelector('#modal_header button') as HTMLDivElement;
    element.click();
  };
  const [isDarkMode, setTheme] = useTheme();
  return (
    <Modal icon={<IoSettingsOutline />} title={t('navbar.title') as string}>
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

export default Setting;
