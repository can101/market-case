import React from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import styles from './button.module.scss';

export interface IButtonProps {
  onClick: () => void;
  title?: string;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  quanttiy?: number;
  type?: 'button' | 'submit' | 'reset';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Button: FC<IButtonProps> = ({ disabled = false, onClick, icon, type, title, quanttiy, size = 'lg', className = styles.button }): ReactElement => {
  const sizeClass = styles[`button__${size}`];
  return (
    <button type={type} disabled={disabled} className={`${styles.button} ${sizeClass}`} onClick={onClick}>
      <span className={styles.button__icon}>
        {quanttiy && <div className={styles.button__badge}>{quanttiy}</div>}
        {icon}
      </span>
      {title && <span className={styles.button__title}>{title}</span>}
    </button>
  );
};

export default Button;
