import React from 'react';
import {
    StyledFormElementWrapper,
    StyledFormElementLabel,
    StyledFormElementValidationMessage,
    StyledFormElementHint,
} from './styled';

export interface FormElementProps {
    children?: React.ReactNode;
    /** The label of the form element */
    label?: string;
    /** Passed as htmlFor to the label */
    labelFor?: string;
    /** Hint to display under the input */
    hint?: string;
    /** Message to display when validating the input */
    validationMessage?: string;
    /** Whether or not to display an asterix before the input */
    isRequired?: boolean;
}

const FormElement: React.FC<FormElementProps> = ({
    label,
    labelFor,
    hint,
    validationMessage,
    isRequired,
    children,
    ...props
}) => {
    return (
        <StyledFormElementWrapper {...props}>
            {label && (
                <StyledFormElementLabel {...props} htmlFor={labelFor} isRequired={isRequired}>
                    {label}
                </StyledFormElementLabel>
            )}
            {children}
            {validationMessage && (
                <StyledFormElementValidationMessage>
                    {validationMessage}
                </StyledFormElementValidationMessage>
            )}
            {hint && !validationMessage && <StyledFormElementHint>{hint}</StyledFormElementHint>}
        </StyledFormElementWrapper>
    );
};

FormElement.defaultProps = {
    isRequired: false,
};

export { FormElement };
