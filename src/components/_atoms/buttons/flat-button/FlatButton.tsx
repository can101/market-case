import React from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import styles from './flatbutton.module.scss';

export interface IButtonProps {
  onClick: () => void;
  title?: string;
  icon?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg' | 'auto';
  bgColor?: 'primary' | 'secondary';
}

const FlatButton: FC<IButtonProps> = ({ disabled = false, onClick, icon, type, title, size = 'auto',bgColor='secondary' }): ReactElement => {
  const sizeClass = styles[`button__${size}`];
  const bgClass = styles[`button__${bgColor}`];
  return (
    <button type={type} disabled={disabled} className={`${styles.button} ${sizeClass} ${bgClass}`} onClick={onClick}>
      <span className={styles.button__icon}>{icon}</span>
      {title && <span className={styles.button__title}>{title}</span>}
    </button>
  );
};

export default FlatButton;
