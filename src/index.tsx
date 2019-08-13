import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';

import { Authenticate } from './App';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal/';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
});

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
