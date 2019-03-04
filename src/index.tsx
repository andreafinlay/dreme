import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

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
    <ApolloProvider client={client}>
        <UIRouter plugins={plugins} states={states}>
            <UIView />
        </UIRouter>
    </ApolloProvider>,
    document.getElementById('root'),
);
