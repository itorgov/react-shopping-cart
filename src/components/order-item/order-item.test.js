import React from "react";
import {shallow} from "enzyme";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {OrderItem} from './order-item.component';

const mockStore = configureStore();
const initialState = {
    cart: {
        items: [
            {
                id: 1,
                name: "Test name",
                price: 3900,
                quantity: 2,
            },
        ],
        note: '',
    }
};
const store = mockStore(initialState);

describe('<OrderItem />', () => {
    it('expect to render', () => {
        const mockItem = {
            id: 1,
            name: "Test name",
            price: 3900,
            quantity: 2,
        };

        expect(shallow(<Provider store={store}><OrderItem item={mockItem} /></Provider>)).toMatchSnapshot();
    });
});
