import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './no-data.module.scss';
import { useTranslation } from 'react-i18next';

const NotFound: FC<{ size?: number }> = ({ size = 40 }): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className={styles.nodata}>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
      </svg>
      <span className={styles.nodata__description}>{t('not_found_data')}</span>
    </div>
  );
};

export default NotFound;
