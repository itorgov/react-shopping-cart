import CartActionTypes from './cart.types';
import {addItem, decrementItemQuantity, incrementItemQuantity, removeItem} from './cart.utils';

const INITIAL_STATE = {
    items: [
        {
            id: 3,
            name: "Translucent Loose Setting Powder",
            price: 3900,
            quantity: 1,
        },
        {
            id: 4,
            name: "Mini Summer Makeup Essentials Set",
            price: 8800,
            quantity: 2,
        }
    ],
    note: '',
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItem(state.items, action.payload)
            };
        case CartActionTypes.INCREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: incrementItemQuantity(state.items, action.payload)
            };
        case CartActionTypes.DECREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: decrementItemQuantity(state.items, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: removeItem(state.items, action.payload)
            };
        case CartActionTypes.UPDATE_NOTE:
            return {
                ...state,
                note: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
