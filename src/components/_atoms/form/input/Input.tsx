import React, { ChangeEvent } from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import styles from './input.module.scss';
import Button from '@_atoms/buttons/circle-icon-button';

interface IInputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'auto';
  onClick?: () => void;
  name?: string;
  error?: boolean
}

const Input: FC<IInputProps> = ({ type = 'text', placeholder, icon, size = 'md', onChange, onClick = () => { }, name, error = false }): ReactElement => {
  const classNames = styles[`input_box__${size}`];
  return (
    <div className={`${styles.input_box} ${classNames}`}>
      <input type={type} onChange={onChange} name={name} className={`${styles.input_box__input} ${error && styles.input_box__input__error}`} placeholder={placeholder} />
      <div className={styles.input_box__button}></div>
      {icon && (
        <div className={styles.input_box__icon}>
          <Button size={'sm'} icon={icon} onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default Input;
