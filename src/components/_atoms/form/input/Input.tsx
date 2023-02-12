import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './input.module.scss';

interface IInputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<IInputProps> = ({ type = 'text', placeholder }): ReactElement => {
  return (
    <div className={styles.input_box}>
      <input type={type} className={styles.input_box__input} placeholder={placeholder} />
    </div>
  );
};

export default BaseInput;
