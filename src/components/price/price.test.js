import React from 'react';
import {shallow} from "enzyme";

import {Price} from './price.component';

describe('<Price />', () => {
    it('expect to render', () => {
        expect(shallow(<Price />)).toMatchSnapshot();
    });

    it('has to divide value by 100 and format it to US dollars', () => {
        expect(shallow(<Price value={2233} />).text()).toEqual('$22.33');
    })
});
