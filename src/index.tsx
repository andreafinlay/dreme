import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { client } from './apollo';
import { ApolloProvider, ApolloConsumer } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

import { Authenticate } from './context/RootContext';
import { NavBar } from './components/NavBar';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal/';
import { NotFound } from './pages/NotFound';
import './index.css';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Authenticate>
            <ApolloConsumer>
                {client => (
                    <ThemeProvider theme={theme}>
                        <Router>
                            <NavBar />
                            <Switch>
                                <Route exact path='/' component={Dashboard} />
                                <Route exact path='/dashboard' component={Dashboard} />
                                <Route exact path='/journal' component={Journal} />
                                <Route component={NotFound} />
                            </Switch>
                        </Router>
                    </ThemeProvider>
                )}
            </ApolloConsumer>
        </Authenticate>
    </ApolloProvider>,
    document.getElementById('root'),
);
