import type { FC } from 'react';
import Modal from '@/components/modal';
import styles from './mobile-menu.module.scss';
import { useTranslation } from 'react-i18next';
import { RiDeleteBin5Line } from 'react-icons/ri';
import FlatButton from '@components/_atoms/buttons/flat-button';

interface IBasketModalProps {
  onClickDelete: () => void;
  onClickAdd: () => void;
  isFavShow: boolean
}

const NavbarModal: FC<IBasketModalProps> = ({ isFavShow, onClickAdd, onClickDelete }) => {
  const backgroundClick = (): void => {
    const element = document.querySelector('#modal_header button') as HTMLDivElement;
    element.click();
  };
  const { t } = useTranslation();
  return (
    <Modal icon={<RiDeleteBin5Line />} title={t('cart.title') as string}>
      <div className={styles.container}>
        <div className={styles.container__title}>{t('cart.question') as string}</div>
        <div className={styles.container__buttons}>
          <FlatButton
            size="lg"
            type="button"
            title={t('cart.delte_to_cart') as string}
            onClick={() => {
              backgroundClick();
              setTimeout(() => {
                onClickDelete();
              }, 500);
            }}
          />
          {!isFavShow && <FlatButton
            bgColor="primary"
            size="lg"
            type="button"
            title={t('cart.add_to_fovorite') as string}
            onClick={() => {
              onClickAdd();
              backgroundClick();
            }}
          />}
        </div>
      </div>
    </Modal>
  );
};

export default NavbarModal;
