import React, { ChangeEvent } from 'react';
import type { FC, ReactElement } from 'react';
import styles from './textarea.module.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name?: string;
}

const BaseInput: FC<InputProps> = ({ placeholder, value, onChange, size = 'md', name }): ReactElement => {
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(e);
  };
  const sizeClasss = styles[`input_box__input__${size}`];
  return (
    <div className={styles.input_box}>
      <textarea name={name} className={`${styles.input_box__input} ${sizeClasss}`} value={value} onInput={handleOnChange} placeholder={placeholder} />
    </div>
  );
};

export default BaseInput;
