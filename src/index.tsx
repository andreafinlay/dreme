import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import './index.css';
import Dashboard from './scripts/components/dashboard/dashboard.component';
import Journal from './scripts/components/journal/journal.component';

const states = [
    {
        name: 'dashboard',
        url: '/',
        component: Dashboard,
    },
    {
        name: 'journal',
        url: '/journal',
        component: Journal,
    },
];

const plugins = [pushStateLocationPlugin];

ReactDOM.render(
    <UIRouter plugins={plugins} states={states}>
        <UIView />
    </UIRouter>,
    document.getElementById('root'),
);
