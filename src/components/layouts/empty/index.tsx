import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './emptylayout.module.scss';
import FlatButton from '../../_atoms/buttons/flat-button';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';

export interface IEmptyProps {
  title: string;
  infoMessage: string;
  path: string;
  srcjson: any;
}

const EmptyLayout: FC<IEmptyProps> = ({ title, infoMessage, path, srcjson }): ReactElement => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className={styles.empty_container}>
      <div className={styles.empty_container__inner}>
        <div className={styles.empty_container__animaton_box}>
          <Player autoplay loop src={srcjson} className={styles.empty_container__animaton_box__element} />
        </div>
        <div className={styles.empty_container__title}>{infoMessage}</div>
        <FlatButton size="md" title={title} type="button" onClick={handleClick} />
      </div>
    </div>
  );
};

export default EmptyLayout;
