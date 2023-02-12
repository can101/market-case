import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './textarea.module.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const BaseInput: FC<InputProps> = ({ placeholder, value, onChange }): ReactElement => {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(e);
  };
  return (
    <div className={styles.input_box}>
      <textarea className={styles.input_box__input} value={value} onInput={handleOnChange} placeholder={placeholder} />
    </div>
  );
};

export default BaseInput;
