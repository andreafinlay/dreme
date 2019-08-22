import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import {} from 'dotenv/config';
import jwt from 'jsonwebtoken';

import { RootContext } from '../../context/RootContext';
import { LOGIN } from './Login.mutations';

// TODO: Get rid of jwt once authentication/RLS is enabled in Postgres

const Login: React.FC<any> = ({ ...props }) => {
    let emailInput;
    let passwordInput;

    const [login] = useMutation(LOGIN);
    const { setAuthenticated, setToken, setUserId, setName } = useContext(RootContext);

    return (
        <>
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
                        jwt.verify(
                            data && data.data.authenticate.jwtToken,
                            process.env.REACT_APP_JWT_SECRET!,
                            function(err, decoded) {
                                decoded && decoded.id && decoded.name
                                    ? (setAuthenticated(true),
                                      setToken(data && data.data.authenticate.jwtToken),
                                      setUserId(decoded.id),
                                      setName(decoded.name),
                                      props.history.push('/journal'))
                                    : (setAuthenticated(false),
                                      setToken(null),
                                      setUserId(null),
                                      setName(null));

                                if (err) {
                                    console.log(err);
                                }
                            },
                        );
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
            <br />
        </>
    );
};

const LoginForm = withRouter(Login);

export { LoginForm };
