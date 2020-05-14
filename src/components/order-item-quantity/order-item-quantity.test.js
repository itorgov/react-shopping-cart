import React from 'react'
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {OrderItemQuantity} from './order-item-quantity.component'
import {OrderItemButton} from '../order-item-button/order-item-button.component'

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
    wrapper = mount(<Provider store={store}><OrderItemQuantity item={mockItem} /></Provider>);
});

describe('<OrderItemQuantity />', () => {
    it('expect to render', () => {
        expect(wrapper.find('span').text()).toEqual('2');
        expect(wrapper.find(OrderItemButton).length).toEqual(2);
        expect(wrapper).toMatchSnapshot();
    });

    it('decrementing button has to dispatch DECREMENT_ITEM_QUANTITY action', () => {
        expect(wrapper.find(OrderItemButton).at(0).prop('variant')).toBe('decrement');

        wrapper.find(OrderItemButton).at(0).simulate('click');

        const action = store.getActions();
        expect(action[0].type).toBe("DECREMENT_ITEM_QUANTITY");
    });

    it('incrementing button has to dispatch INCREMENT_ITEM_QUANTITY action', () => {
        expect(wrapper.find(OrderItemButton).at(1).prop('variant')).toBe('increment');

        wrapper.find(OrderItemButton).at(1).simulate('click');

        const action = store.getActions();
        expect(action[0].type).toBe("INCREMENT_ITEM_QUANTITY");
    });
});
