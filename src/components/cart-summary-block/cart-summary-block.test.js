import React from "react";
import {shallow} from "enzyme";

import {CartSummaryBlock} from './cart-summary-block.component';

describe('<CartSummaryBlock />', () => {
    it('expect to render', () => {
        expect(shallow(<CartSummaryBlock />)).toMatchSnapshot();
    });
});
