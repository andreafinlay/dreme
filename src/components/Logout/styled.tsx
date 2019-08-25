import styled from 'styled-components';
import { Button } from '../Button';
import { spacing } from '../../utils';

const StyledLogoutButton = styled(Button)`
    &:last-child {
        margin-right: ${spacing('sm')};
    }
`;

export { StyledLogoutButton };
