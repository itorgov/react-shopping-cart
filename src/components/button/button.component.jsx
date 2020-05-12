import React from 'react';
import classNames from "classnames";

import styles from './button.module.scss';

export const Button = ({variant, children: content}) => (
    <button className={classNames([
        styles.button,
        styles[variant || 'primary'],
    ])}
    >
        {content}
    </button>
);
