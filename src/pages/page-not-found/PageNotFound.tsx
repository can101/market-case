import React from 'react';
import styles from './pnf.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import nfp from '@assets/json/pnf.json';
import FlatButton from '@_atoms/buttons/flat-button';
import { useNavigate } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={styles.pagenotfound}>
      <Player src={nfp} className={styles.pagenotfound__animation} autoplay loop />
      <FlatButton
        size='lg'
        title="Go to Home"
        onClick={function (): void {
          navigate('/');
        }}
      />
    </div>
  );
}

export default PageNotFound;
