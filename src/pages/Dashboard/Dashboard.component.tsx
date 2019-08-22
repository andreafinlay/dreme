import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RootContext } from '../../context/RootContext';
import { LogoutForm, LoginForm, RegisterForm } from '../../components';

const Dashboard: React.FC<any> = () => {
    const { authenticated, name } = useContext(RootContext);
    return (
        <>
            <div className='bg-dreme flex'>
                <header>Zzz</header>
            </div>
            <div>
                {authenticated ? (
                    <>
                        <Link to='/journal'>Journal</Link>
                        <h1>Hello, {name}</h1>
                        <LogoutForm />
                    </>
                ) : (
                    <>
                        <RegisterForm />
                        <LoginForm />
                    </>
                )}
            </div>
        </>
    );
};

export { Dashboard };
