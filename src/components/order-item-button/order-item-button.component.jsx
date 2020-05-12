import React from 'react';
import classNames from 'classnames';

import {ReactComponent as IconTrash} from './trash.svg';
import {ReactComponent as IconPlus} from "./plus.svg";
import {ReactComponent as IconMinus} from "./minus.svg";
import styles from './order-item-button.module.scss';

const renderIcon = variant => {
    switch (variant) {
        case 'remove':
            return <IconTrash/>;
        case 'increment':
            return <IconPlus/>;
        case 'decrement':
            return <IconMinus/>;
        default:
            return '';
    }
};

export const OrderItemButton = ({variant, shake = false}) => (
    <button className={classNames({
        [styles.button]: true,
        [styles[variant]]: true,
        [styles.shake]: shake,
    })}
    >
        {renderIcon(variant)}
    </button>
);
