import styled from 'styled-components';
import { NavBarProps } from './NavBar.component';
import { palette, spacing } from '../../utils';

const StyledNavBar = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: ${spacing('md')} ${spacing('xl')} ${spacing('md')} ${spacing('xl')};
    color: ${palette('neutral', '700')};
    background-color: ${palette('primary', '500')};
`;

const StyledNavBarMenu = styled('div')<NavBarProps>`
    display: flex;
    align-items: center;
    justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
    width: 100%;
`;

const StyledNavBarButton = styled('button')`
    margin-left: ${spacing('sm')};
    margin-right: ${spacing('sm')};
    &:first-child {
        margin-left: ${spacing('xl')};
    }
    &:last-child {
        margin-right: ${spacing('xl')};
    }
    color: ${palette('neutral', '700')};
    background-color: transparent;
    &:hover {
        color: ${palette('neutral', '900')};
    }
    &:focus {
        outline: none;
    }
    border: none;
    font-weight: 700;
    cursor: pointer;
`;

const StyledNavBarUser = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 200px;
`;

export { StyledNavBar, StyledNavBarMenu, StyledNavBarButton, StyledNavBarUser };
