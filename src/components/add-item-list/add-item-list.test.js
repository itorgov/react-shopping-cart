import React from "react";
import {shallow} from "enzyme";

import {AddItemList} from './add-item-list.component';

describe('<AddItemList />', () => {
    it('expect to render', () => {
        const mockItems = [
            {
                id: 1,
                name: "Test name A",
                price: 4000,
            },
            {
                id: 1,
                name: "Test name B",
                price: 2000,
            },
        ];
        expect(shallow(<AddItemList items={mockItems} />)).toMatchSnapshot();
    });
});
