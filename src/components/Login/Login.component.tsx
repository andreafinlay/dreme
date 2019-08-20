import React, { useContext } from 'react';
import { useMutation, ApolloConsumer } from '@apollo/react-hooks';
import { LOGIN } from './Login.mutations';
import { RootContext } from '../../context/RootContext';

const LoginForm: React.FC<any> = () => {
    let emailInput;
    let passwordInput;

    const [login] = useMutation(LOGIN);
    const { setAuthenticated, authBody, setAuthBody } = useContext(RootContext);

    return (
        <ApolloConsumer>
            {client => {
                return (
                    <div>
                        <br />
                        <h1>Log in</h1>
                        <br />
                        <form
                            style={{ border: 'solid 1px black', width: '500px' }}
                            onSubmit={e => {
                                e.preventDefault();
                                login({
                                    variables: {
                                        email: emailInput.value,
                                        password: passwordInput.value,
                                    },
                                }).then(data => {
                                    setAuthenticated(true);
                                    setAuthBody(data && data.data.authenticate.jwtToken);
                                });
                                emailInput.value = '';
                                passwordInput.value = '';
                            }}
                        >
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
                            <button style={{ backgroundColor: 'blue' }} type='submit'>
                                Log in
                            </button>
                        </form>
                        {authBody && <h2>Logged in as: {authBody}</h2>}
                        <br />
                    </div>
                );
            }}
        </ApolloConsumer>
    );
};

export { LoginForm };
