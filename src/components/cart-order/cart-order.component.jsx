import React from 'react';

import {OrderItems} from "../order-items/order-items.component";
import {OrderInfo} from "../order-info/order-info.component";

import styles from './cart-order.module.scss';

export const CartOrder = () => (
    <div className={styles.order}>
        <OrderItems/>
        <OrderInfo/>
    </div>
);
