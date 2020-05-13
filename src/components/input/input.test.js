import React from "react";
import {shallow} from "enzyme";

import {Input} from './input.component';

describe('<Input />', () => {
    it('expect to render', () => {
        expect(shallow(<Input />)).toMatchSnapshot();
    });

    it('expect to render with label when it passed as a prop', () => {
        expect(shallow(<Input label='Test label' id='test' />)).toMatchSnapshot();
    });
});
