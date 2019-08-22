import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloConsumer } from '@apollo/react-hooks';

import { client } from './apollo';
import './index.css';

import { Authenticate } from './context/RootContext';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal/';
import { NotFound } from './pages/NotFound';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Authenticate>
            <ApolloConsumer>
                {client => (
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route path='/journal' component={Journal} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                )}
            </ApolloConsumer>
        </Authenticate>
    </ApolloProvider>,
    document.getElementById('root'),
);
