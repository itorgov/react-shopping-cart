import React from 'react';
import classNames from "classnames";

import styles from './button.module.scss';

export const Button = ({variant, small = false, children: content, onClick}) => (
    <button className={classNames({
        [styles.button]: true,
        [styles[variant || 'primary']]: true,
        [styles.small]: small
    })}
            onClick={onClick}
    >
        {content}
    </button>
);
