import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { RootContext } from '../../context/RootContext';

const Logout: React.FC<any> = ({ ...props }) => {
    const { setAuthenticated, setToken, setName, setUserId } = useContext(RootContext);

    return (
        <>
            <br />
            <h1>Log out</h1>
            <br />
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setAuthenticated(false);
                    setToken(null);
                    setName(null);
                    setUserId(null);
                    props.history.push('/');
                }}
            >
                <button style={{ backgroundColor: 'green' }} type='submit'>
                    Log out
                </button>
            </form>
            <br />
        </>
    );
};

const LogoutForm = withRouter(Logout);

export { LogoutForm };
