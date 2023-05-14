import React from 'react';
import styles from './CssModules.module.scss';

export const CssModules = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>- CSS Modules -</p>
            <button className={styles.buttonStyle}>FIGHT!!</button>
        </div>
    );
};
