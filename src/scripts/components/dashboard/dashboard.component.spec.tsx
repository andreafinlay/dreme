import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard.component';

xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
