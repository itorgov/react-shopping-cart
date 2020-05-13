import React from "react";
import {shallow} from "enzyme";
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux';

import {OrderItems} from './order-items.component';

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

describe('<OrderItems />', () => {
    it('expect to render', () => {
        expect(shallow(<Provider store={store}><OrderItems /></Provider>)).toMatchSnapshot();
    });
});
