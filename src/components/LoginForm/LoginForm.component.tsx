import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import {} from 'dotenv/config';
import jwt from 'jsonwebtoken';

import { RootContext } from '../../context/RootContext';
import { LOGIN } from './LoginForm.mutations';
import { Input } from '../Input';
import { Button } from '../Button';
import { Form } from '../Form';

// TODO: Get rid of jwt once authentication/RLS is enabled in Postgres
const Login: React.FC<any> = ({ ...props }) => {
    const { setAuthenticated, setToken, setUserId, setName } = useContext(RootContext);
    const [login] = useMutation(LOGIN);
    const [values, setValues] = useState({});
    const [touched, setTouched] = useState({});

    let isDisabled = () => {
        for (let value in values) {
            if (values[value] === '') {
                return true;
            }
        }
        if (!touched['email'] || !touched['loginPassword']) {
            return true;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values['email'])) {
            return true;
        } else if (values['loginPassword'].length < 3) {
            return true;
        }
    };

    const handleChange = ({ target }: React.FormEvent<any>) => {
        setTouched({ ...touched, [(target as HTMLInputElement).name]: true });
        setValues({
            ...values,
            [(target as HTMLInputElement).name]: (target as HTMLInputElement).value,
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        login({
            variables: {
                email: values['email'],
                password: values['loginPassword'],
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
                        : (setAuthenticated(false), setToken(null), setUserId(null), setName(null));
                    if (err) {
                        console.log(err);
                    }
                },
            );
        });
        setValues({});
    };

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Input
                value={values['email'] || ''}
                label='Email'
                onChange={handleChange}
                placeholder='example@email.com'
                name='email'
                type='email'
                hint='A valid email address'
                id='login-email'
                touched={touched['email']}
            />
            <Input
                value={values['loginPassword'] || ''}
                label='Password'
                onChange={handleChange}
                placeholder='***'
                name='loginPassword'
                type='password'
                id='login-password'
                touched={touched['loginPassword']}
            />
            <Button
                type='submit'
                kind='base'
                shape='rounded'
                size='xs'
                variant='primary'
                isDisabled={isDisabled()}
            >
                Log in
            </Button>
        </Form>
    );
};

const LoginForm = withRouter(Login);

export { LoginForm };
