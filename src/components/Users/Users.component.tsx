import React, { useState, useContext } from 'react';
import { useMutation, useQuery, ApolloConsumer } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';
import { RootContext } from '../../App';
import { GET_USERS } from './Users.queries';
import { CREATE_USER } from './Users.mutations';

const RegisterForm: React.FC<any> = () => {
    let nameInput;
    let emailInput;

    const [newUser, setNewUser] = useState();
    const [createUser] = useMutation(CREATE_USER);
    let { authenticated, authBody } = useContext(RootContext);

    if (newUser) {
        authenticated = true;
        authBody = 'asdfafasdf';
    }
    console.log('authenticated', authenticated);
    console.log('authbody', authBody);

    return (
        <ApolloConsumer>
            {client => {
                return (
                    <div>
                        <br />
                        <h1>Register</h1>
                        <br />
                        <form
                            style={{ border: 'solid 1px black', width: '500px' }}
                            onSubmit={e => {
                                e.preventDefault();
                                createUser({
                                    variables: {
                                        name: nameInput.value,
                                        createdAt: new Date().toISOString(),
                                        updatedAt: new Date().toISOString(),
                                        email: emailInput.value,
                                        id: uuidv4(),
                                    },
                                    refetchQueries: [{ query: GET_USERS }],
                                }).then(res => setNewUser(res));
                                nameInput.value = '';
                                emailInput.value = '';
                            }}
                        >
                            <input
                                ref={node => {
                                    nameInput = node;
                                }}
                                placeholder='Name'
                            />
                            <input
                                ref={node => {
                                    emailInput = node;
                                }}
                                placeholder='Email'
                            />
                            <button style={{ backgroundColor: 'red' }} type='submit'>
                                Create User
                            </button>
                        </form>
                        <br />
                    </div>
                );
            }}
        </ApolloConsumer>
    );
};

const Users: React.FC<any> = () => {
    const { data, loading } = useQuery(GET_USERS);
    let { authenticated } = useContext(RootContext);

    return (
        <ApolloConsumer>
            {client => {
                return (
                    <>
                        {authenticated && (
                            <div>
                                {loading && <div>Loading...</div>}
                                {!loading && (
                                    <div>
                                        <h2>List of users</h2>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>User</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data &&
                                                    data.allUsers.nodes.map(user => (
                                                        <tr key={user.id}>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}
                        <RegisterForm />
                    </>
                );
            }}
        </ApolloConsumer>
    );
};

export { Users };
