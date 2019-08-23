import React, { useContext } from 'react';

import { RootContext } from '../../context/RootContext';
import { LoginForm, RegisterForm } from '../../components';

const Dashboard: React.FC<any> = () => {
    const { authenticated, name } = useContext(RootContext);
    return (
        <>
            {authenticated ? (
                <>
                    <h1>Hello, {name}</h1>
                </>
            ) : (
                <>
                    <RegisterForm />
                    <LoginForm />
                </>
            )}
        </>
    );
};

export { Dashboard };
