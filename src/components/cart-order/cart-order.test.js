import React from "react";
import {shallow} from "enzyme";

import {CartOrder} from './cart-order.component';

describe('<CartOrder />', () => {
    it('expect to render', () => {
        expect(shallow(<CartOrder />)).toMatchSnapshot();
    });
});
