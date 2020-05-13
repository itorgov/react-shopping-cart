import React from "react";
import {shallow} from "enzyme";

import {Cart} from './cart.component';

describe('<Cart />', () => {
    it('expect to render', () => {
        expect(shallow(<Cart />)).toMatchSnapshot();
    });
});
