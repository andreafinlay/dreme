import styled from 'styled-components';

import { spacing } from '../../../utils';
import { Form } from '../../Form';

const StyledNewEntryForm = styled(Form)`
    box-sizing: border-box;
    width: 50%;
    padding-right: ${spacing('lg')};
`;

export { StyledNewEntryForm };
