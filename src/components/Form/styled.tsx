import styled from 'styled-components';
import { spacing } from '../../utils';

import { StyledFormElementWrapper } from '../../primitives/FormElement/styled';
import { FormProps } from './Form.component';

const StyledForm = styled('form')<FormProps>`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: ${spacing('xs')};
    }
    ${StyledFormElementWrapper} > textarea {
        height: ${spacing('50')};
    }
`;

export { StyledForm };
