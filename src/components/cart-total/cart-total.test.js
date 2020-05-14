import React from "react";
import {mount} from "enzyme";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {CartTotal} from './cart-total.component';

let wrapper;
let store;

beforeEach(() => {
    const mockStore = configureStore();
    const initialState = {
        cart: {
            items: [
                {
                    id: 1,
                    name: "Test name A",
                    price: 4000,
                    quantity: 2,
                },
                {
                    id: 1,
                    name: "Test name B",
                    price: 2000,
                    quantity: 1,
                },
            ],
            note: '',
        }
    };
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><CartTotal /></Provider>);
});

describe('<CartTotal />', () => {
    it('expect to render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('span has to contain correct total value', () => {
        expect(wrapper.find('span').text()).toEqual('$100.00')
    });
});
