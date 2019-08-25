import React from 'react';
import styled from 'styled-components';
import { FormElementProps } from './FormElement.component';
import { palette, spacing } from '../../utils';

const StyledFormElementWrapper = styled('div')<FormElementProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: inherit;
    margin: 0;
`;

const StyledFormElementLabel = styled(({ isRequired, children, ...props }) => {
    return (
        <label {...props}>
            {children}
            {isRequired && <span title='This field is required'>*</span>}
        </label>
    );
})<FormElementProps>``;

const StyledFormElementValidationMessage = styled('small')`
    color: ${palette('danger', '500')};
    margin: ${spacing('0.5')} 0 0 0;
`;

const StyledFormElementHint = styled('small')`
    margin: ${spacing('0.5')} 0 0 0;
`;

export {
    StyledFormElementWrapper,
    StyledFormElementLabel,
    StyledFormElementValidationMessage,
    StyledFormElementHint,
};
