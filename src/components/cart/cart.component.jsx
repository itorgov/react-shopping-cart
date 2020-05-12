import React from 'react';

import {CartOrder} from "../cart-order/cart-order.component";
import {CartSummaryBlock} from "../cart-summary-block/cart-summary-block.component";

import styles from './cart.module.scss';

export const Cart = () => (
    <div className={styles.cart}>
        <CartOrder/>
        <CartSummaryBlock/>
    </div>
);
