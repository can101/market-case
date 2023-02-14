import React from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import styles from './input.module.scss';
import Button from '../../buttons/circle-icon-button';

interface IInputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'auto';
}

const Input: FC<IInputProps> = ({ type = 'text', placeholder, icon, size = 'md' }): ReactElement => {
  const classNames = styles[`input_box__${size}`];
  return (
    <div className={`${styles.input_box} ${classNames}`}>
      <input type={type} className={styles.input_box__input} placeholder={placeholder} />
      <div className={styles.input_box__button}></div>
      {icon && (
        <div className={styles.input_box__icon}>
          <Button
            size={'sm'}
            icon={icon}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
