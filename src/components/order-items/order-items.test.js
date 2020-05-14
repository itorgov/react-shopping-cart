import React from "react";
import {mount} from "enzyme";
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux';

import {OrderItems} from './order-items.component';

const mockStore = configureStore();

describe('<OrderItems />', () => {
    it('expect to render items', () => {
        const store = mockStore({
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
        });

        expect(mount(<Provider store={store}><OrderItems /></Provider>)).toMatchSnapshot();
    });

    it('expect to render a message about the empty cart when there is no items', () => {
        const store = mockStore({
            cart: {
                items: [],
                note: '',
            }
        });

        expect(mount(<Provider store={store}><OrderItems /></Provider>)).toMatchSnapshot();
    });
});
