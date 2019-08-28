import React from 'react';
import styled from 'styled-components';

import { palette, spacing } from '../../utils';
import { FormElementProps } from './FormElement.component';

const StyledFormElementWrapper = styled('div')<FormElementProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${spacing('sm')};
`;

const StyledFormElementLabel = styled(({ isRequired, children, ...props }) => {
    return (
        <label {...props}>
            {children}
            {isRequired && <span title='This field is required'>*</span>}
        </label>
    );
})<FormElementProps>`
    margin-bottom: ${spacing('sm')};
`;

const StyledFormElementValidationMessage = styled('small')`
    color: ${palette('danger', '500')};
    margin: ${spacing('0.5')} 0 ${spacing('sm')} 0;
`;

const StyledFormElementHint = styled('small')`
    margin: ${spacing('0.5')} 0 ${spacing('sm')} 0;
`;

export {
    StyledFormElementLabel,
    StyledFormElementHint,
    StyledFormElementValidationMessage,
    StyledFormElementWrapper,
};
