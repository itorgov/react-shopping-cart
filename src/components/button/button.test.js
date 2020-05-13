import React from "react";
import {shallow} from "enzyme";

import {Button} from './button.component';

describe('<Button />', () => {
    it('expect to render', () => {
        expect(shallow(<Button />)).toMatchSnapshot();
    });

    it('renders content inside', () => {
        const wrapper = shallow(<Button>Test string</Button>);
        expect(wrapper.text()).toEqual('Test string');
    });
});
