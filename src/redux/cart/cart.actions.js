import CartActionTypes from './cart.types';

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const incrementItemQuantity = item => ({
    type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: item
});

export const decrementItemQuantity = item => ({
    type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const updateNote = text => ({
    type: CartActionTypes.UPDATE_NOTE,
    payload: text
});
