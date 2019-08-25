import React from 'react';

import { StyledForm } from './styled';

export interface FormProps {
    /** Method to call on form submit */
    onSubmit?: Function;
    /** Disable HTML5 validation */
    noValidate?: boolean;
}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
    return <StyledForm {...props}>{children}</StyledForm>;
};

export { Form };
