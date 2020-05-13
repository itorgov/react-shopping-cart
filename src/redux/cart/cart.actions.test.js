import React from 'react'

import * as actions from './cart.actions';
import CartActionTypes from './cart.types';

describe('ACTIONS: Test cart actions', () => {
    it('addItem', () => {
        const add = actions.addItem({
            id: 1,
            name: "Test name",
            price: 3900,
        })
        expect(add).toEqual({
            type: CartActionTypes.ADD_ITEM,
            payload: {
                id: 1,
                name: "Test name",
                price: 3900,
            },
        })
    });

    it('incrementItemQuantity', () => {
        const add = actions.incrementItemQuantity({
            id: 1,
            name: "Test name",
            price: 3900,
        })
        expect(add).toEqual({
            type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
            payload: {
                id: 1,
                name: "Test name",
                price: 3900,
            },
        })
    });

    it('decrementItemQuantity', () => {
        const add = actions.decrementItemQuantity({
            id: 1,
            name: "Test name",
            price: 3900,
        })
        expect(add).toEqual({
            type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
            payload: {
                id: 1,
                name: "Test name",
                price: 3900,
            },
        })
    });

    it('removeItem', () => {
        const add = actions.removeItem({
            id: 1,
            name: "Test name",
            price: 3900,
        })
        expect(add).toEqual({
            type: CartActionTypes.REMOVE_ITEM,
            payload: {
                id: 1,
                name: "Test name",
                price: 3900,
            },
        })
    });

    it('updateNote', () => {
        const add = actions.updateNote('New test value')
        expect(add).toEqual({
            type: CartActionTypes.UPDATE_NOTE,
            payload: 'New test value',
        })
    });
});
