import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal/';
import './index.css';

export let RootContext;

const Authenticate = ({ children }) => {
    const prevAuth = window.localStorage.getItem('authenticated') ? true : false;
    const prevAuthBody = window.localStorage.getItem('authBody');

    const [authenticated, setAuthenticated]: any = useState(prevAuth);
    const [authBody, setAuthBody]: any = useState(prevAuthBody);

    useEffect(() => {
        window.localStorage.setItem('authenticated', authenticated);
        window.localStorage.setItem('authBody', authBody);
    }, [authenticated, authBody]);

    const context = {
        authenticated,
        setAuthenticated,
        authBody,
        setAuthBody,
    };

    RootContext = React.createContext(context);
    return <RootContext.Provider value={context}>{children}</RootContext.Provider>;
};

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
