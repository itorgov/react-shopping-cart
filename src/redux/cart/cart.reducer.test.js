import React from 'react'

import cartReducer from './cart.reducer';
import CartActionTypes from './cart.types';

describe('REDUCERS: Test cart reducer', () => {
    it(CartActionTypes.ADD_ITEM, () => {
        let state = {
            items: [],
            note: '',
        }

        state = cartReducer(state, {
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
        let state = {
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

        state = cartReducer(state, {
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

    it(CartActionTypes.INCREMENT_ITEM_QUANTITY, () => {
        let state = {
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

        state = cartReducer(state, {
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
        let state = {
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

        state = cartReducer(state, {
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

    it(CartActionTypes.REMOVE_ITEM, () => {
        let state = {
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

        state = cartReducer(state, {
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
});
