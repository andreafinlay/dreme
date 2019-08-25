import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { RootContext } from '../../context/RootContext';
import { Heading } from '../../components/Heading';

const StyledDashboard = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
`;

const DashboardComponent: React.FC<any> = ({ ...props }) => {
    const { authenticated, name } = useContext(RootContext);

    return (
        <StyledDashboard>
            {authenticated ? (
                <>
                    <Heading as='h1'>Hello, {name}</Heading>
                    <Heading as='h2'>Dashboard</Heading>
                </>
            ) : (
                <>{props.history.push('/')}</>
            )}
        </StyledDashboard>
    );
};

const Dashboard = withRouter(DashboardComponent);

export { Dashboard };
