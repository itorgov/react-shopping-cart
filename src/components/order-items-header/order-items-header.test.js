import React from "react";
import {shallow} from "enzyme";

import {OrderItemsHeader} from './order-items-header.component';

describe('<OrderItemsHeader />', () => {
    it('expect to render', () => {
        expect(shallow(<OrderItemsHeader />)).toMatchSnapshot();
    });
});
