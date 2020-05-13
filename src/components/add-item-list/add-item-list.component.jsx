import React from 'react';

import {AddItem} from '../add-item/add-item.component';

import styles from './add-item-list.module.scss';

export const AddItemList = ({items}) => (
    <div className={styles.list}>
        {items.map(item => <AddItem key={item.id} item={item}/> )}
    </div>
);
