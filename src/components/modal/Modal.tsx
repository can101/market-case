import React, { useEffect, useState } from 'react';
import styles from './modal.module.scss';
import type { FC, ReactNode, ReactFragment, ReactPortal, ReactElement } from 'react';
import Button from '@_atoms/buttons/circle-icon-button';
import { IoCloseSharp } from 'react-icons/io5';
import ReactDOM from 'react-dom';

export type Children = ReactFragment | ReactNode | ReactPortal | boolean | null | undefined;

interface IModalProps {
  title: string;
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

const Modal: FC<IModalProps> = ({ onClose, children, title }): ReactElement => {
  useEffect(() => {
    const removeBodyClass = modifiedBodyOverflow();
    return () => {
      removeBodyClass();
    };
  }, []);

  const [isAnim, setIsAnim] = useState<boolean>(true);
  const blurAnimationClass = styles[`modal__${isAnim ? 'open' : 'close'}`];
  const slideAnimationClass = styles[`modal__inner__${isAnim ? 'open' : 'close'}`];
  return ReactDOM.createPortal(
    <>
      <div className={`${styles.modal} ${blurAnimationClass}`}>
        <div className={`${styles.modal__inner} ${slideAnimationClass}`}>
          <div className={styles.modal__inner__header} id={'modal_header'}>
            <div className={styles.modal__inner__header__title}>{title}</div>
            <Button
              size={'md'}
              onClick={() => {
                setIsAnim(false);
                setTimeout(() => {
                  onClose();
                }, 500);
              }}
              icon={<IoCloseSharp />}
            />
          </div>
          <div className={styles.modal__inner__body}>
            <div className={styles.modal__inner__body__content}>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
