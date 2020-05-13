import React from 'react';
import {useSelector} from "react-redux";

import {Price} from '../price/price.component';

import styles from './cart-total.module.scss';

export const CartTotal = () => {
    const items = useSelector(state => state.cart.items);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div className={styles.text}>
            Cart total <span className={styles.price}><Price value={total}/></span>
        </div>
    );
};
