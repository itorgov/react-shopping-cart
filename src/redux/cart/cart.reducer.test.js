import React from 'react'

import cartReducer from './cart.reducer';
import CartActionTypes from './cart.types';

describe('REDUCERS: Test cart reducer', () => {
    it('have to be initialized by default state', () => {
        const state = cartReducer(undefined, {
            type: 'SOME_ACTION_TYPE',
            payload: 'Test payload'
        });

        expect(state.hasOwnProperty('items')).toBe(true);
        expect(Array.isArray(state.items)).toBe(true);
        expect(state.hasOwnProperty('note')).toBe(true);
    });

    it(CartActionTypes.ADD_ITEM, () => {
        const initialState = {
            items: [],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.ADD_ITEM,
            payload: {
                id: 1,
                name: "Test name",
                price: 3900,
            }
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 1,
                }
            ],
            note: '',
        });
    });

    it(`${CartActionTypes.ADD_ITEM}, new item should be first in the list`, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 1,
                }
            ],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.ADD_ITEM,
            payload: {
                id: 2,
                name: "Test name B",
                price: 9900,
            }
        });

        expect(state).toEqual({
            items: [
                {
                    id: 2,
                    name: "Test name B",
                    price: 9900,
                    quantity: 1,
                },
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 1,
                },
            ],
            note: '',
        });
    });

    it(`${CartActionTypes.ADD_ITEM}, should increment quantity of item if it already added`, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 8900,
                    quantity: 1,
                },
            ],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.ADD_ITEM,
            payload: {
                id: 1,
                name: "Test name A",
                price: 3900,
            }
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 2,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 8900,
                    quantity: 1,
                },
            ],
            note: '',
        });
    });

    it(CartActionTypes.INCREMENT_ITEM_QUANTITY, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 9900,
                    quantity: 4,
                },
            ],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
            payload: {
                id: 2,
                name: "Test name B",
                price: 9900,
                quantity: 4,
            }
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 9900,
                    quantity: 5,
                }
            ],
            note: '',
        });
    });

    it(CartActionTypes.DECREMENT_ITEM_QUANTITY, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 9900,
                    quantity: 4,
                }
            ],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
            payload: {
                id: 2,
                name: "Test name B",
                price: 9900,
                quantity: 4,
            }
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 9900,
                    quantity: 3,
                }
            ],
            note: '',
        });
    });

    it(`${CartActionTypes.DECREMENT_ITEM_QUANTITY}, cannot decrement when quantity less then 2`, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
            ],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
            payload: {
                id: 1,
                name: "Test name A",
                price: 3900,
                quantity: 1,
            },
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
            ],
            note: '',
        });
    });

    it(CartActionTypes.REMOVE_ITEM, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Test name B",
                    price: 9900,
                    quantity: 4,
                },
                {
                    id: 3,
                    name: "Test name C",
                    price: 2300,
                    quantity: 1,
                }
            ],
            note: '',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.REMOVE_ITEM,
            payload: {
                id: 2,
                name: "Test name B",
                price: 9900,
                quantity: 4,
            }
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 3900,
                    quantity: 1,
                },
                {
                    id: 3,
                    name: "Test name C",
                    price: 2300,
                    quantity: 1,
                }
            ],
            note: '',
        });
    });

    it(CartActionTypes.UPDATE_NOTE, () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 1,
                },
            ],
            note: 'Old note value',
        }

        const state = cartReducer(initialState, {
            type: CartActionTypes.UPDATE_NOTE,
            payload: 'New note value'
        });

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 1,
                },
            ],
            note: 'New note value',
        });
    });

    it('should return the same state when action is unknown', () => {
        const initialState = {
            items: [
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 1,
                },
            ],
            note: 'Test note',
        }

        const state = cartReducer(initialState, {
            type: 'UNKNOWN_ACTION',
            payload: 'Test value'
        });

        expect(state).toEqual(initialState);
    });
});
