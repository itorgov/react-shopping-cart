import React from 'react';
import classNames from "classnames";

import styles from './checkbox.module.scss';

export const Checkbox = ({children: label}) => (
    <label className={classNames([
        styles.checkbox,
        'my-4'
    ])}
    >
        <input type="checkbox"/>
        <span className={styles.checkmark}/>
        {label}
    </label>
);
