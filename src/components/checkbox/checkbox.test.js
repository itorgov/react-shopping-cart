import React from "react";
import {shallow} from "enzyme";

import {Checkbox} from './checkbox.component';

describe('<Checkbox />', () => {
    it('expect to render', () => {
        expect(shallow(<Checkbox />)).toMatchSnapshot();
    });
});
