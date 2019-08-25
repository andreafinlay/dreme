import React from 'react';
import styled from 'styled-components';

import { RegisterForm } from '../../components/RegisterForm';

const StyledRegister = styled('div')`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Register: React.FC = () => {
    return (
        <StyledRegister>
            <h1>Register</h1>
            <RegisterForm />
        </StyledRegister>
    );
};

export { Register };
