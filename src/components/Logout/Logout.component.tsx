import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { RootContext } from '../../context/RootContext';
import { StyledLogoutButton } from './styled';

const LogoutComponent: React.FC<any> = ({ ...props }) => {
    const { setAuthenticated, setToken, setName, setUserId } = useContext(RootContext);

    return (
        <>
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
                <StyledLogoutButton variant='ghost' size='sm' kind='minimal' type='submit'>
                    Log out
                </StyledLogoutButton>
            </form>
        </>
    );
};

const Logout = withRouter(LogoutComponent);

export { Logout };
