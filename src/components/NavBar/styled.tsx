import styled from 'styled-components';
import { NavBarProps } from './NavBar.component';
import { palette, spacing } from '../../utils';
import { Button } from '../Button';

const StyledNavBar = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: ${spacing('md')} ${spacing('xl')} ${spacing('md')} ${spacing('xl')};
    color: ${palette('neutral', '700')};
    background-color: ${palette('primary', '500')};
    position: relative;
    z-index: 10;
    border-bottom: 1px solid ${palette('neutral', '900')};
`;

const StyledNavBarMenu = styled('div')<NavBarProps>`
    display: flex;
    align-items: center;
    justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
    width: 100%;
`;

const StyledNavBarButton = styled(Button)`
    margin-left: ${spacing('sm')};
    margin-right: ${spacing('sm')};
    &:first-child {
        margin-left: ${spacing('xl')};
    }
    &:last-child {
        margin-right: ${spacing('xl')};
    }
`;

const StyledNavBarUser = styled('div')`
    display: flex;
    flex-shrink: 6;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    color: ${palette('neutral', '900')};
`;

const StyledNavBarUserName = styled('div')`
    margin-right: ${spacing('md')};
    color: ${palette('neutral', '0')};
`;

export {
    StyledNavBar,
    StyledNavBarMenu,
    StyledNavBarButton,
    StyledNavBarUser,
    StyledNavBarUserName,
};
