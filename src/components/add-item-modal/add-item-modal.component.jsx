import React, {useState} from 'react';

import {Modal} from '../modal/modal.component';
import {Spinner} from '../spinner/spinner.component';

import styles from './add-item-modal.module.scss';
import {AddItemList} from "../add-item-list/add-item-list.component";

export const AddItemModal = () => {
    const [loading, setLoadingTo] = useState(true);
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        await setLoadingTo(true);
        const response = await fetch('https://my-json-server.typicode.com/itorgov/react-shopping-cart/products');
        const items = await response.json();
        await setItems(items);
        await setLoadingTo(false);
    }

    const render = () => {
        if (loading) {
            return <Spinner/>;
        } else if (items.length) {
            return <AddItemList items={items}/>;
        }

        return <div className={styles.empty}>There is no other products</div>;
    }

    return (
        <Modal
            buttonVariant='pink'
            buttonSmall={true}
            onOpened={loadItems}
        >
            {render()}
        </Modal>
    );
}
