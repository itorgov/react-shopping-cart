import React from "react";
import {shallow} from "enzyme";

import {OrderItemButton} from './order-item-button.component';

describe('<OrderItemButton />', () => {
    it('expect to render', () => {
        expect(shallow(<OrderItemButton />)).toMatchSnapshot();
    });

    it('remove variant adds "remove" class', () => {
        expect(shallow(<OrderItemButton variant='remove' />).hasClass('remove')).toBe(true);
    });

    it('increment variant adds "increment" class', () => {
        expect(shallow(<OrderItemButton variant='increment' />).hasClass('increment')).toBe(true);
    });

    it('increment variant adds "decrement" class', () => {
        expect(shallow(<OrderItemButton variant='decrement' />).hasClass('decrement')).toBe(true);
    });

    it('shake variant adds "shake" class', () => {
        expect(shallow(<OrderItemButton shake={true} />).hasClass('shake')).toBe(true);
    });
});
