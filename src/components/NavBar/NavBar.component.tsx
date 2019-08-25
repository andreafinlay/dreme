import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { RootContext } from '../../context/RootContext';
import {
    StyledNavBar,
    StyledNavBarMenu,
    StyledNavBarButton,
    StyledNavBarUser,
    StyledNavBarUserName,
} from './styled';
import { Logout } from '../Logout';

export type NavBarJustify = 'flex-start' | 'center' | 'flex-end';

export type NavBarProps = {
    justify?: NavBarJustify;
    history: any;
};

const NavBarComponent: React.FC<NavBarProps> = ({ justify, ...props }) => {
    const { authenticated, name } = useContext(RootContext);

    const noAuthActions = [
        { title: 'Log in', onClick: () => props.history.push('/login') },
        { title: 'Register', onClick: () => props.history.push('/register') },
    ];

    const authActions = [
        { title: 'Dashboard', onClick: () => props.history.push('/dashboard') },
        { title: 'Journal', onClick: () => props.history.push('/journal') },
    ];

    return (
        <StyledNavBar>
            <img
                src='https://res.cloudinary.com/andreafinlay/image/upload/v1566531572/dreme-logo.png'
                height='36'
                width='36'
                onClick={() => props.history.push('/')}
                style={{ cursor: 'pointer' }}
            />
            <StyledNavBarMenu justify={justify}>
                {authenticated &&
                    authActions.map((action, i) => {
                        return (
                            <StyledNavBarButton
                                key={i}
                                onClick={action.onClick}
                                kind='minimal'
                                size='sm'
                                variant='ghost'
                            >
                                {action.title}
                            </StyledNavBarButton>
                        );
                    })}
                {!authenticated &&
                    noAuthActions.map((action, i) => {
                        return (
                            <StyledNavBarButton
                                key={i}
                                onClick={action.onClick}
                                kind='minimal'
                                size='sm'
                                variant='ghost'
                            >
                                {action.title}
                            </StyledNavBarButton>
                        );
                    })}
            </StyledNavBarMenu>
            {authenticated && (
                <StyledNavBarUser>
                    <StyledNavBarUserName>{name}</StyledNavBarUserName>
                    <Logout />
                </StyledNavBarUser>
            )}
        </StyledNavBar>
    );
};

const NavBar = withRouter(NavBarComponent);

export { NavBar };
