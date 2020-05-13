import React from 'react'
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {OrderItemQuantity} from './order-item-quantity.component'
import {OrderItemButton} from '../order-item-button/order-item-button.component'

const mockStore = configureStore();
const initialState = {
    items: [
        {
            id: 1,
            name: "Test name",
            price: 3900,
            quantity: 2,
        },
    ],
    note: '',
};
const store = mockStore(initialState);

describe('<OrderItemQuantity />', () => {
    it('expect to render', () => {
        expect(shallow(<Provider store={store}><OrderItemQuantity /></Provider>)).toMatchSnapshot();
    });

    it('decrementing', () => {
        const wrapper = mount(<Provider store={store}><OrderItemQuantity item={{
            id: 1,
            name: "Test name",
            price: 3900,
            quantity: 2,
        }} /></Provider>);

        expect(wrapper.find('span').text()).toEqual('2');
        expect(wrapper.find(OrderItemButton).length).toEqual(2);
        expect(wrapper.find(OrderItemButton).get(0).props.variant).toBe('decrement');

        wrapper.find(OrderItemButton).get(0).props.onClick();

        const action = store.getActions();
        expect(action[0].type).toBe("DECREMENT_ITEM_QUANTITY");
    });
});
