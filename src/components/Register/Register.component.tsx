import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {} from 'dotenv/config';
import jwt from 'jsonwebtoken';
import uuidv4 from 'uuid/v4';

import { RootContext } from '../../context/RootContext';
import { REGISTER } from './Register.mutations';
import { LOGIN } from '../Login/Login.mutations';

// TODO: Get rid of jwt once authentication/RLS is enabled in Postgres

export const RegisterForm: React.FC<any> = () => {
    let nameInput;
    let emailInput;
    let passwordInput;
    const [register] = useMutation(REGISTER);
    const [login] = useMutation(LOGIN);

    const { setAuthenticated, setToken, setUserId, setName } = useContext(RootContext);

    return (
        <>
            <br />
            <h1>Register</h1>
            <br />
            <form
                style={{ border: 'solid 1px black', width: '500px' }}
                onSubmit={e => {
                    e.preventDefault();
                    const email = emailInput.value;
                    const password = passwordInput.value;
                    register({
                        variables: {
                            name: nameInput.value,
                            email: emailInput.value,
                            password: passwordInput.value,
                            id: uuidv4(),
                        },
                    }).then(() => {
                        login({
                            variables: {
                                email: email,
                                password: password,
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
                                          setName(decoded.name))
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
                    });
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
        </>
    );
};
