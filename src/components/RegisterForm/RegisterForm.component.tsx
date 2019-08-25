import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import {} from 'dotenv/config';
import jwt from 'jsonwebtoken';
import uuidv4 from 'uuid/v4';

import { RootContext } from '../../context/RootContext';
import { REGISTER } from './RegisterForm.mutations';
import { LOGIN } from '../LoginForm/LoginForm.mutations';
import { Input } from '../Input';
import { Button } from '../Button';
import { Form } from '../Form';

// TODO: Get rid of jwt once authentication/RLS is enabled in Postgres
const RegisterFormComponent: React.FC<any> = ({ ...props }) => {
    const [register] = useMutation(REGISTER);
    const [login] = useMutation(LOGIN);
    const [values, setValues] = useState({});
    const [touched, setTouched] = useState({});
    const { setAuthenticated, setToken, setUserId, setName } = useContext(RootContext);

    let isDisabled = () => {
        for (let value in values) {
            if (values[value] === '') {
                return true;
            }
        }
        if (!touched['name'] || (!touched['email'] || !touched['registerPassword'])) {
            return true;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values['email'])) {
            return true;
        } else if (values['registerPassword'].length < 3) {
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
        register({
            variables: {
                name: values['name'],
                email: values['email'],
                password: values['registerPassword'],
                id: uuidv4(),
                createdat: new Date().toUTCString(),
                updatedat: new Date().toUTCString(),
            },
        }).then(() => {
            login({
                variables: {
                    email: values['email'],
                    password: values['registerPassword'],
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
                              props.history.push('./journal'))
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
        setValues({});
    };

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Input
                value={values['name'] || ''}
                label='Name'
                onChange={handleChange}
                placeholder='Enter your name'
                name='name'
                type='name'
                id='register-name'
            />
            <Input
                value={values['email'] || ''}
                label='Email'
                onChange={handleChange}
                placeholder='example@email.com'
                name='email'
                type='email'
                hint='A valid email address'
                id='register-email'
            />
            <Input
                value={values['registerPassword'] || ''}
                label='Password'
                onChange={handleChange}
                placeholder='***'
                name='registerPassword'
                type='password'
                hint='At least 3 characters long'
                id='register-password'
            />
            <Button
                type='submit'
                kind='base'
                shape='rounded'
                size='xs'
                variant='primary'
                isDisabled={isDisabled()}
            >
                Register
            </Button>
        </Form>
    );
};

const RegisterForm = withRouter(RegisterFormComponent);

export { RegisterForm };
