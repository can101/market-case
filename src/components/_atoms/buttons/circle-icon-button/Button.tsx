import React from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import styles from './button.module.scss';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'auto';

export interface IButtonProps {
  onClick: () => void;
  title?: string;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  quanttiy?: number;
  type?: 'button' | 'submit' | 'reset';
  size?: Size;
}

const Button: FC<IButtonProps> = ({ disabled = false, onClick, icon, type, title, quanttiy, size = 'lg', className = styles.container__button }): ReactElement => {
  const sizeClass = styles[`container__button__${size}`];
  const butonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div className={styles.container}>
      <button type={type} ref={butonRef} disabled={disabled} className={`${styles.container__button} ${sizeClass}`} onClick={onClick}>
        <span className={styles.container__button__icon}>
          {quanttiy && <div className={styles.container__button__badge}>{quanttiy}</div>}
          {icon}
        </span>
        {title && (
          <span
            onClick={() => {
              butonRef.current?.click();
            }}
            className={styles.container__button__title}
          >
            {title}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
