import React from 'react';

import styles from './input.module.scss';

export const Input = ({id, type, placeholder, label}) => (
    <div className={styles.group}>
        { label ? <label htmlFor={id} className={styles.label}>{label}</label> : ''}
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={styles.input}
        />
    </div>
);
