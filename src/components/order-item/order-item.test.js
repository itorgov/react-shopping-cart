import React from "react";
import {mount} from "enzyme";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {OrderItem} from './order-item.component';
import {OrderItemButton} from "../order-item-button/order-item-button.component";

let wrapper;
let store;

beforeEach(() => {
    const mockStore = configureStore();
    const mockItem = {
        id: 1,
        name: "Test name",
        price: 3900,
        quantity: 2,
    };
    const initialState = {
        items: [mockItem],
        note: '',
    };
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><OrderItem item={mockItem} /></Provider>);
});

describe('<OrderItem />', () => {
    it('expect to render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('remove button has to dispatch REMOVE_ITEM action', () => {
        expect(wrapper.find(OrderItemButton).at(2).prop('variant')).toBe('remove');

        wrapper.find(OrderItemButton).at(2).simulate('click');

        const action = store.getActions();
        expect(action[0].type).toBe("REMOVE_ITEM");
    });
});
