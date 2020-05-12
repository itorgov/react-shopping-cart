import React from 'react';

import {OrderItemsHeader} from "../order-items-header/order-items-header.component";
import {OrderItem} from "../order-item/order-item.component";

import styles from './order-items.module.scss';

export const OrderItems = () => (
    <div className={styles.items}>
        <OrderItemsHeader/>
        <OrderItem/>
    </div>
);
