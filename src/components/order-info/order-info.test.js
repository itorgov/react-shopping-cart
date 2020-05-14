import React from "react";
import {mount} from "enzyme";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {OrderInfo} from './order-info.component';

let wrapper;
let store;

beforeEach(() => {
    const mockStore = configureStore();
    const initialState = {
        cart: {
            items: [
                {
                    id: 1,
                    name: "Test name",
                    price: 3900,
                    quantity: 2,
                }
            ],
            note: 'Test note value',
        }
    };
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><OrderInfo /></Provider>);
});

describe('<OrderInfo />', () => {
    it('expect to render', () => {
        expect(wrapper.find('[name="note"]').prop('value')).toEqual('Test note value');
        expect(wrapper).toMatchSnapshot();
    });
});
