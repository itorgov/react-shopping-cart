import React from 'react';

import {OrderItemButton} from "../order-item-button/order-item-button.component";

import styles from './order-item-quantity.module.scss';

export const OrderItemQuantity = () => (
    <div>
        <OrderItemButton variant='decrement'/>
        <span className={styles.quantity}>1</span>
        <OrderItemButton variant='increment'/>
    </div>
);
