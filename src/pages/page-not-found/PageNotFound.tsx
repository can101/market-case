import { memo } from 'react';
import styles from './pnf.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import nfp from '@assets/json/pnf.json';
import FlatButton from '@_atoms/buttons/flat-button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PageNotFound(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.pagenotfound}>
      <Player src={nfp} className={styles.pagenotfound__animation} autoplay loop />
      <FlatButton
        size='lg'
        title={t('go_to_home') as string}
        onClick={function (): void {
          navigate('/');
        }}
      />
    </div>
  );
}

export default memo(PageNotFound);
