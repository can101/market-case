import React from 'react';
import type {FC, ReactElement} from 'react';
import styles from './spinner.module.scss';

const Spinner: FC = (): ReactElement => {
    return (
        <>
            <div className={styles.spinner}>
                <div className={styles.spinner__item}></div>
            </div>
        </>
    );
}

export default Spinner;
