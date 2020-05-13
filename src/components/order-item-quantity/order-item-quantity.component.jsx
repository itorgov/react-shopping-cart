import React from 'react';
import {useDispatch} from "react-redux";

import {OrderItemButton} from "../order-item-button/order-item-button.component";
import {decrementItemQuantity, incrementItemQuantity} from '../../redux/cart/cart.actions';

import styles from './order-item-quantity.module.scss';

export const OrderItemQuantity = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <OrderItemButton
                variant='decrement'
                onClick={() => dispatch(decrementItemQuantity(item))}
            />
            <span className={styles.quantity}>{item.quantity}</span>
            <OrderItemButton
                variant='increment'
                onClick={() => dispatch(incrementItemQuantity(item))}
            />
        </div>
    );
};
