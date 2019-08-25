import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { RootContext } from '../../context/RootContext';
import { Button } from '../../components/Button';

const StyledHome = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
`;

const StyledHomeContent = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const HomePage: React.FC<any> = ({ ...props }) => {
    const { authenticated, name } = useContext(RootContext);

    return (
        <StyledHome>
            {authenticated ? (
                <>
                    <h1>Hello, {name}</h1>
                </>
            ) : (
                <>
                    <h1>Welcome to Dreme</h1>
                    <img src='https://res.cloudinary.com/andreafinlay/image/upload/v1566531572/dreme-logo.png' />
                    <StyledHomeContent>
                        <Button
                            size='sm'
                            kind='minimal'
                            onClick={() => props.history.push('/login')}
                        >
                            Log in &nbsp;
                        </Button>
                        or &nbsp;
                        <Button
                            size='sm'
                            kind='minimal'
                            onClick={() => props.history.push('/register')}
                        >
                            register &nbsp;
                        </Button>
                        to continue
                    </StyledHomeContent>
                </>
            )}
        </StyledHome>
    );
};

const Home = withRouter(HomePage);

export { Home };
