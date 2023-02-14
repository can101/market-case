import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import styles from './selectbox.module.scss';
import type { ICategory } from '../../../../types';

interface ISelectProps {
  placeholder: string;
  options: ICategory[];
  value: string;
  onClick: (e: React.MouseEvent<HTMLElement>, item: ICategory) => void;
  isGray?: boolean;
  size: 'sm' | 'md' | 'lg' | 'auto';
}

const SelectBox: FC<ISelectProps> = ({ options, placeholder, isGray = false, onClick, size = 'lg' }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ICategory>({ id: 0, name: '' });
  const className = styles[`select__${size}`];
  const toggleOpen = (bool?: boolean): void => {
    setIsOpen(bool ?? !isOpen);
  };
  return (
    <div
      className={`${styles.select} ${className}`}
      onMouseLeave={() => {
        toggleOpen(false);
      }}
    >
      <button
        onClick={() => {
          toggleOpen();
        }}
        onMouseMove={() => {
          toggleOpen(true);
        }}
        className={`${styles.select__button} ${isGray ? styles.select__button__gray : ''}`}
      >
        {selectedOption.name || placeholder}
      </button>
      {isOpen && (
        <div className={styles.select__wrapper}>
          <ul>
            {options.map((option) => (
              <li
                key={option.id}
                className={`${styles.select__option} ${selectedOption.id === option.id ? styles.select__option__selected : ''}`}
                onClick={(e: React.MouseEvent<HTMLElement>): void => {
                  setSelectedOption(option);
                  onClick(e, option);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
