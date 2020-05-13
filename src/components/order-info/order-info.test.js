import React from "react";
import {mount} from "enzyme";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {OrderInfo} from './order-info.component';

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

describe('<OrderInfo />', () => {
    it('expect to render', () => {
        expect(mount(<Provider store={store}><OrderInfo /></Provider>)).toMatchSnapshot();
    });
});
