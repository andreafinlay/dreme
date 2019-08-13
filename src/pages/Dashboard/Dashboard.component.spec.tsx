import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './Dashboard.component';

describe('init', () => {
    const component = shallow(<Dashboard />);

    it('should render correctly', () => {
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('should set initial state', () => {
        expect(component.state()).toEqual(null);
    });
});
