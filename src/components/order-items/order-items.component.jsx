import React from 'react';
import {useSelector} from 'react-redux';

import {OrderItemsHeader} from '../order-items-header/order-items-header.component';
import {OrderItem} from '../order-item/order-item.component';

import styles from './order-items.module.scss';

export const OrderItems = () => {
    const items = useSelector(state => state.cart.items);

    return (
        <div className={styles.items}>
            <OrderItemsHeader/>
            {
                items.length
                    ? items.map(item => <OrderItem key={item.id} item={item}/>)
                    : <span className={styles.empty}>Your cart is empty</span>
            }
        </div>
    );
};
