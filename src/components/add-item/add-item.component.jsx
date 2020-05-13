import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {Price} from "../price/price.component";
import {Button} from "../button/button.component";
import {addItem} from "../../redux/cart/cart.actions";

import styles from './add-item.module.scss';

export const AddItem = ({item}) => {
    const [isAdded, setAddedTo] = useState(false);
    const dispatch = useDispatch();

    const addItemToStore = () => {
        dispatch(addItem(item));
        setAddedTo(true);
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.header}>{item.name}</h2>
            <div className={styles['cta-block']}>
                <div className={styles.price}>
                    <Price value={item.price}/>
                </div>
                {
                    isAdded
                        ? <div className={styles.added}>Added</div>
                        : <Button
                            variant='black'
                            small={true}
                            onClick={addItemToStore}
                        >
                            Add to cart
                        </Button>
                }
            </div>
        </div>
    );
};
