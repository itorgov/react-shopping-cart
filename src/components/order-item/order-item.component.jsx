import React from 'react';

import {OrderItemQuantity} from '../order-item-quantity/order-item-quantity.component';
import {OrderItemButton} from '../order-item-button/order-item-button.component';

import styles from './order-item.module.scss';

export const OrderItem = () => (
    <div className={styles.item}>
        <div>Ambient® Lighting Palette</div>
        <div className={styles.price}>$64.99</div>
        <OrderItemQuantity/>
        <div className={styles.price}>$64.99</div>
        <OrderItemButton variant='remove' shake={true}/>
    </div>
);
