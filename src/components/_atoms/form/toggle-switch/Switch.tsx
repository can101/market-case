import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import styles from './switch.module.scss';

interface ISwitchProps {
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const Switch: FC<ISwitchProps> = ({ size = 'md', onClick }): ReactElement => {
  const [state, setState] = useState<boolean>(false);
  const switchSizeClass = styles[`container__switch_box__${size}`];
  const switchActiveClass = styles[`container__switch_box__${state ? 'active' : ''}`];
  const handleClick = (): void => {
    setState(!state);
    onClick();
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.container__switch_box} ${switchSizeClass} ${switchActiveClass}`} onClick={handleClick}></div>
    </div>
  );
};

export default Switch;
