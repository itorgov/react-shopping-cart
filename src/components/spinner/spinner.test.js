import React from "react";
import {shallow} from "enzyme";

import {Spinner} from './spinner.component';

describe('<Spinner />', () => {
    it('expect to render', () => {
        expect(shallow(<Spinner />)).toMatchSnapshot();
    });
});
