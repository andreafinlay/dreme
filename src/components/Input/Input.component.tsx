import React from 'react';

import { StyledInput } from './styled';
import { FormElement } from '../../primitives/FormElement';

export interface InputProps {
    /** The value of the input */
    value: string;
    /** Whether or not the input has been touched */
    touched?: boolean;
    /** The name of the input */
    name: string;
    /** The type of the input */
    type: string;
    /** The ID of the label */
    id?: string;
    /** The label of the input */
    label?: string;
    /** The placeholder of the input */
    placeholder: string;
    /** Hint to display under the input */
    hint?: string;
    /** Function to call on value change */
    onChange?: Function;
    /** Whether or not the input is full width */
    isFull?: boolean;
    /** Whether or not the input is required */
    isRequired?: boolean;
    /** Whether or not the input is invalid */
    isInvalid?: boolean;
    /** Whether or not the input is disabled */
    isDisabled?: boolean;
    /** Styled-components as prop */
    as?: any;
    /** Remove border styles */
    minimal?: boolean;
}

const Input: React.FC<InputProps> = ({
    value,
    touched,
    name,
    type,
    id,
    label,
    hint,
    onChange,
    isFull,
    isInvalid,
    isDisabled,
    minimal,
    ...props
}) => {
    let errors = {
        required: '',
        email: '',
        loginPassword: '',
        registerPassword: '',
        newEntryTitle: '',
        newEntryBody: '',
    };
    let isRequired = false;

    if (name === 'newEntryTitle' && value.length < 1 && touched) {
        errors = { ...errors, newEntryTitle: 'Enter a title' };
    }

    if (name === 'newEntryBody' && value.length < 1 && touched) {
        errors = { ...errors, newEntryBody: 'Enter a body' };
    }

    if (!value) {
        errors = { ...errors, required: '*' };
        isRequired = true;
    } else if (type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        errors = { ...errors, email: 'Invalid email address' };
    } else if (name === 'registerPassword' && value.length < 3) {
        errors = { ...errors, registerPassword: 'Enter at least 3 characters' };
    }

    return (
        <>
            <FormElement
                label={label}
                labelFor={id}
                hint={hint}
                validationMessage={errors[name]}
                isRequired={isRequired}
            >
                <StyledInput
                    {...props}
                    value={value}
                    name={name}
                    type={type}
                    id={id}
                    onChange={onChange}
                    isFull={isFull}
                    isInvalid={errors[name]}
                    isDisabled={isDisabled}
                    minimal={minimal}
                />
            </FormElement>
        </>
    );
};

export { Input };
