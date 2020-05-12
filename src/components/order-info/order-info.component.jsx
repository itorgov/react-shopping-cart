import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import {Input} from "../input/input.component";
import styles from './order-info.module.scss';

export const OrderInfo = () => {
    const note = useSelector(state => state.note);
    const dispatch = useDispatch();

    return (
        <div className={styles.info}>
            <Input
                id='note'
                type='text'
                placeholder='Some words to our team'
                label='Add a note'
                value={note}
                onChange={e => dispatch({type: 'UPDATE_NOTE', payload: e.target.value})}
            />
        </div>
    )
};
