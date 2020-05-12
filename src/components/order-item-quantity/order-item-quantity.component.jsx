import React from 'react';
import {useDispatch} from "react-redux";

import {OrderItemButton} from "../order-item-button/order-item-button.component";

import styles from './order-item-quantity.module.scss';

export const OrderItemQuantity = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <OrderItemButton
                variant='decrement'
                onClick={() => dispatch({type: 'DECREMENT_ITEM_QUANTITY', payload: item.id})}
            />
            <span className={styles.quantity}>{item.quantity}</span>
            <OrderItemButton
                variant='increment'
                onClick={() => dispatch({type: 'INCREMENT_ITEM_QUANTITY', payload: item.id})}
            />
        </div>
    );
};
