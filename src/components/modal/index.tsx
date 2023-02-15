import React, { useState } from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import ModalWrapper, { type Children } from './Modal';
import Button from '@_atoms/buttons/circle-icon-button';

interface IModalProps {
  children: Children;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon: ReactNode;
  title?: string;
}

const Modal: FC<IModalProps> = ({ children, size = 'md', icon, title = 'modal' }): ReactElement => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <>
      <Button
        type={'button'}
        icon={icon}
        size={size}
        onClick={() => {
          setIsModal(true);
        }}
      />
      {isModal && (
        <ModalWrapper
          title={title}
          onClose={() => {
            setIsModal(false);
          }}
        >
          {children}
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
