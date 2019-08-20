import React, { useContext, useState, useEffect } from 'react';
import {} from 'dotenv/config';
import { useQuery, ApolloConsumer, useMutation } from '@apollo/react-hooks';
import { GET_ENTRIES } from '../Entries/Entries.queries';
import { RegisterForm } from '../Register/Register.component';
import { LoginForm } from '../Login/Login.component';
import { LogoutForm } from '../Logout/Logout.component';
import { RootContext } from '../../context/RootContext';
import { NewEntryForm } from '../Entries/Entries.component';
import { GET_CURRENT_USER } from './Users.mutations';

const Users: React.FC<any> = () => {
    const [currentUser, setCurrentUser] = useState();
    const { data, loading } = useQuery(GET_ENTRIES);
    const [getCurrentUser] = useMutation(GET_CURRENT_USER);
    const { authenticated, authBody } = useContext(RootContext);

    useEffect(() => {
        getCurrentUser({
            variables: {
                token: authBody,
                secret: process.env.REACT_APP_JWT_SECRET!,
            },
        }).then(res => {
            setCurrentUser(res && res.data.currentUserId.uuid);
        });
    }, [authBody]);

    console.log('authenticated', authenticated);

    return (
        <ApolloConsumer>
            {client => {
                return (
                    <>
                        <h1>Hello, {currentUser}</h1>
                        {authenticated ? (
                            <div>
                                {loading && <div>Loading...</div>}
                                {!loading && (
                                    <div>
                                        <div>
                                            <NewEntryForm />
                                            <br />
                                            <h3>List of entries</h3>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Body</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data &&
                                                        data.allEntries.nodes.map(entry => (
                                                            <tr key={entry.id}>
                                                                <td>{entry.title}</td>
                                                                <td>{entry.body}</td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                                <LogoutForm />
                            </div>
                        ) : (
                            <div>
                                <RegisterForm />
                                <LoginForm />
                                <LogoutForm />
                            </div>
                        )}
                    </>
                );
            }}
        </ApolloConsumer>
    );
};

export { Users };
