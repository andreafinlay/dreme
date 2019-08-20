import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo';
import './index.css';

import { Authenticate } from './context/RootContext';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal/';

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
        <Authenticate>
            <UIRouter plugins={plugins} states={states}>
                <UIView />
            </UIRouter>
        </Authenticate>
    </ApolloProvider>,
    document.getElementById('root'),
);
