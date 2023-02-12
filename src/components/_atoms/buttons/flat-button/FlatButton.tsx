import React from 'react';
import type {FC, ReactElement, ReactNode} from 'react';
import styles from './flatbutton.module.scss';

export interface IButtonProps {
    onClick: () => void;
    title?: string;
    icon?: ReactNode;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const FlatButton: FC<IButtonProps> = ({
                                          disabled = false,
                                          onClick,
                                          icon,
                                          type,
                                          title,
                                          className = styles.button
                                      }): ReactElement => {
    return (
        <button type={type} disabled={disabled} className={className} onClick={onClick}>
            <span className={styles.button__icon}>
                {icon}
            </span>
            {title && <span className={styles.button__title}>
                {title}
            </span>}
        </button>
    );
}

export default FlatButton;
