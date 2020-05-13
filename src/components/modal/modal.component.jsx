import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';

import {Button} from "../button/button.component";

import styles from './modal.module.scss';

export const Modal = ({
        children: content,
        buttonVariant = 'black',
        buttonSmall = false,
        isOpened = false,
        onOpened,
        onClosed
    }) => {
    const [opened, setOpened] = useState(isOpened);
    const el = document.createElement('div');
    const modalRoot = document.getElementById('modal-root');

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        };
    });

    const openModal = () => {
        setOpened(true);

        if (onOpened) {
            onOpened();
        }
    }

    const closeModal = () => {
        setOpened(false);

        if (onClosed) {
            onClosed();
        }
    }

    return (
        <>
            <Button
                variant={buttonVariant}
                small={buttonSmall}
                onClick={() => openModal()}
            >
                Add more
            </Button>
            {opened ? ReactDOM.createPortal(
                <>
                    <div
                        className={styles.modal}
                        onClick={event => event.stopPropagation()}
                    >
                        <div className={styles.header}>
                            <h2 className={styles.title}>
                                Choose a product
                            </h2>
                            <button
                                className={styles.close}
                                onClick={() => closeModal()}
                            >
                                &times;
                            </button>
                        </div>
                        <div className={styles.content}>
                            {content}
                        </div>
                    </div>
                    <div
                        className={styles.cover}
                        onClick={() => closeModal()}
                    />
                </>,
                el
            ) : ''}
        </>
    );
}
