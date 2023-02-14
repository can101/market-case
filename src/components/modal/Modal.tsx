import React, { useEffect, useState } from 'react';
import styles from './modal.module.scss';
import type { FC, ReactNode, ReactFragment, ReactPortal, ReactElement } from 'react';
import Button from '../_atoms/buttons/circle-icon-button';
import { IoCloseSharp } from 'react-icons/io5';
import ReactDOM from 'react-dom';

export type Children = ReactFragment | ReactNode | ReactPortal | boolean | null | undefined;

interface IModalProps {
  children: Children;
  onClose: () => void;
}

const modifiedBodyOverflow = () => {
  const body = document.body;
  body.style.overflow = 'hidden';
  return () => {
    body.style.overflow = 'auto';
  };
};

const Modal: FC<IModalProps> = ({ onClose, children }): ReactElement => {
  useEffect(() => {
    const removeBodyClass = modifiedBodyOverflow();
    return () => {
      removeBodyClass();
    };
  }, []);

  const [isAnim, setIsAnim] = useState<boolean>(true);
  const animationClass = styles[`wrapper__modal__${isAnim ? 'open' : 'close'}`];
  return ReactDOM.createPortal(
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__overlay}></div>
        <div className={styles.wrapper__modal_content}>
          <div className={`${styles.wrapper__modal} ${animationClass}`}>
            <div className={styles.wrapper__modal__header}>
              <div className={styles.wrapper__modal__header__title}>Modal</div>
              <Button
                size={'md'}
                onClick={() => {
                  setIsAnim(false);
                  setTimeout(() => {
                    onClose();
                  }, 600);
                }}
                icon={<IoCloseSharp />}
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
