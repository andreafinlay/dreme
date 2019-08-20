import React from 'react';
import { useMutation, ApolloConsumer } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';
import { GET_USERS } from '../Users/Users.queries';
import { REGISTER } from './Register.mutations';

export const RegisterForm: React.FC<any> = () => {
    let nameInput;
    let emailInput;
    let passwordInput;
    const [register] = useMutation(REGISTER);

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
                                register({
                                    variables: {
                                        name: nameInput.value,
                                        email: emailInput.value,
                                        password: passwordInput.value,
                                        id: uuidv4(),
                                    },
                                    refetchQueries: [{ query: GET_USERS }],
                                });
                                nameInput.value = '';
                                emailInput.value = '';
                                passwordInput.value = '';
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
                            <input
                                ref={node => {
                                    passwordInput = node;
                                }}
                                placeholder='Password'
                            />
                            <button style={{ backgroundColor: 'red' }} type='submit'>
                                Register
                            </button>
                        </form>
                        <br />
                    </div>
                );
            }}
        </ApolloConsumer>
    );
};
