import React from 'react';

import {CartTotal} from '../cart-total/cart-total.component';
import {Checkbox} from '../checkbox/checkbox.component';
import {Button} from '../button/button.component';

import styles from './cart-summary-block.module.scss';
import {ReactComponent as IconLock} from './lock.svg';

export const CartSummaryBlock = () => (
    <div className={styles.summary}>
        <CartTotal/>
        <p>Shipping & taxes will calculated at checkout</p>
        <Checkbox>
            I agree to <a href='/'>Terms & Conditions</a>
        </Checkbox>
        <Button variant='black'>
            Checkout
            <IconLock/>
        </Button>
    </div>
);
