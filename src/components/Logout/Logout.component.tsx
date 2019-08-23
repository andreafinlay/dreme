import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { RootContext } from '../../context/RootContext';
import { StyledNavBarButton } from '../NavBar/styled';

const StyledLogoutButton = styled(StyledNavBarButton)`
    &:last-child {
        margin-right: 0;
    }
`;

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
                <StyledLogoutButton type='submit'>Log out</StyledLogoutButton>
            </form>
        </>
    );
};

const Logout = withRouter(LogoutComponent);

export { Logout };
