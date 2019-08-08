import React from 'react';
import { shallow } from 'enzyme';

import Journal from './journal.component';

describe('init', () => {
    const component = shallow(<Journal />);

    it('should render correctly', () => {
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('should set initial state', () => {
        expect(component.state()).toEqual(null);
    });
});
