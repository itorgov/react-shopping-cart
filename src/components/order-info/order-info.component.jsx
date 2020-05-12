import React from 'react';

import {Input} from "../input/input.component";

import styles from './order-info.module.scss';

export const OrderInfo = () => (
    <div className={styles.info}>
        <Input
            id='note'
            type='text'
            placeholder='Some words to our team'
            label='Add a note'
        />
    </div>
);
