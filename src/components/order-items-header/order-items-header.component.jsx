import React from 'react';

import styles from './order-items-header.module.scss';

export const OrderItemsHeader = () => (
    <div className={styles.header}>
        <div>Product</div>
        <div>Price</div>
        <div>Qty</div>
        <div>Total</div>
        <div>&nbsp;</div>
    </div>
);
