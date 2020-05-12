import React from 'react';

import styles from './cart-total.module.scss';

export const CartTotal = () => (
    <div className={styles.text}>
        Cart total <span className={styles.price}>$189.90</span>
    </div>
);
