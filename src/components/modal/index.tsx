import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import ModalWrapper, { type Children } from './Modal';

interface IModalProps {
  children: Children;
}

const Modal: FC<IModalProps> = ({ children }): ReactElement => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => {setIsModal(true);}}>open</button>
      {isModal && (
        <ModalWrapper
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
