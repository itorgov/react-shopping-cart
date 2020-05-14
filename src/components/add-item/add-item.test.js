import React from 'react'
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

import {AddItem} from './add-item.component'
import {Button} from "../button/button.component";

let wrapper;
let store;

beforeEach(() => {
    const mockItem = {
        id: 1,
        name: "Test name",
        price: 3900,
    };
    const mockStore = configureStore();
    const initialState = {
        items: [],
        note: '',
    };
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><AddItem item={mockItem} /></Provider>);
});

describe('<AddItem />', () => {
    it('expect to render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('add button has to dispatch ADD_ITEM action', () => {
        wrapper.find(Button).simulate('click');

        const actions = store.getActions();
        expect(actions[0].type).toBe("ADD_ITEM");
    });

    it('add button has to disappear after click', () => {
        expect(wrapper.find(Button).length).toEqual(1);

        wrapper.find(Button).simulate('click');
        wrapper.update();

        expect(wrapper.find(Button).length).toEqual(0);
        expect(wrapper.find('div[className="added"]').text()).toEqual('Added');
    });
});
