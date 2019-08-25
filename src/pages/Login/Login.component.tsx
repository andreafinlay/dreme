import React from 'react';
import styled from 'styled-components';

import { LoginForm } from '../../components/LoginForm';

const StyledLogin = styled('div')`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Login: React.FC = () => {
    return (
        <StyledLogin>
            <h1>Log in</h1>
            <LoginForm />
        </StyledLogin>
    );
};

export { Login };
