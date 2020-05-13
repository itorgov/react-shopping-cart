import React from "react";
import {shallow} from "enzyme";

import {Modal} from './modal.component';

describe('<Modal />', () => {
    it('expect to render button as default', () => {
        expect(shallow(<Modal />)).toMatchSnapshot();
    });
});

describe('<Modal />', () => {
    it('expect to render modal when it has opened prop', () => {
        expect(shallow(<Modal isOpened={true} />)).toMatchSnapshot();
    });
});
