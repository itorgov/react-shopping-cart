import React, {useEffect, useState} from "react";

import {Modal} from "../modal/modal.component";

import styles from './add-item-modal.module.scss';

export const AddItemModal = () => {
    return (
        <Modal
            buttonVariant='pink'
            buttonSmall={true}
        >
            Test
        </Modal>
    );
}
