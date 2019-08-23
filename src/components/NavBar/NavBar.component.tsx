import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { RootContext } from '../../context/RootContext';
import { StyledNavBar, StyledNavBarMenu, StyledNavBarButton, StyledNavBarUser } from './styled';
import { Logout } from '../Logout';

export type NavBarJustify = 'flex-start' | 'center' | 'flex-end';

export type NavBarProps = {
    justify?: NavBarJustify;
    history: any;
};

const NavBarComponent: React.FC<NavBarProps> = ({ justify, ...props }) => {
    const { authenticated, name } = useContext(RootContext);

    const actions = [
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
                {actions.map((action, i) => {
                    return (
                        <StyledNavBarButton key={i} onClick={action.onClick}>
                            {action.title}
                        </StyledNavBarButton>
                    );
                })}
            </StyledNavBarMenu>
            {authenticated && (
                <StyledNavBarUser>
                    <div>Welcome, {name}</div>
                    <Logout />
                </StyledNavBarUser>
            )}
        </StyledNavBar>
    );
};

const NavBar = withRouter(NavBarComponent);

export { NavBar };
