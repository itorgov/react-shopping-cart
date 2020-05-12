import React from 'react';

import styles from './input.module.scss';

export const Input = ({id, type, value, placeholder, label, onChange}) => (
    <div className={styles.group}>
        {label ? <label htmlFor={id} className={styles.label}>{label}</label> : ''}
        <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            className={styles.input}
            onChange={onChange}
        />
    </div>
);
