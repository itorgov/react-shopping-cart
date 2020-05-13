import React from 'react';
import {useDispatch} from "react-redux";

import {OrderItemQuantity} from '../order-item-quantity/order-item-quantity.component';
import {OrderItemButton} from '../order-item-button/order-item-button.component';
import {Price} from '../price/price.component';
import {removeItem} from '../../redux/cart/cart.actions';

import styles from './order-item.module.scss';

export const OrderItem = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.item}>
            <div>{item.name}</div>
            <div className={styles.price}>
                <Price value={item.price}/>
            </div>
            <OrderItemQuantity item={item}/>
            <div className={styles.price}>
                <Price value={item.quantity * item.price}/>
            </div>
            <OrderItemButton
                variant='remove'
                shake={true}
                onClick={() => dispatch(removeItem(item))}
            />
        </div>
    )
};
