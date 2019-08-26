import React from 'react';

import { StyledForm } from './styled';
import { Button } from '../Button';

export interface FormProps {
    /** Method to call on form submit */
    onSubmit?: Function;
    /** Disable HTML5 validation */
    noValidate?: boolean;
    /** Values to validate */
    values?: any;
    /** The touched fields to validate */
    touched?: any;
    /** Label to add to the button */
    buttonLabel?: string;
}

const Form: React.FC<FormProps> = ({ children, values, touched, buttonLabel, ...props }) => {
    let isDisabled = () => {
        for (let value in values) {
            if (values[value] === '') {
                return true;
            }
        }

        if (touched && touched['component'] === 'newEntry') {
            if (!touched['newEntryTitle'] || !touched['newEntryBody']) {
                return true;
            }
        }

        if (touched && touched['component'] === 'login') {
            if (!touched['email'] || !touched['loginPassword']) {
                return true;
            }
        }

        if (touched && touched['component'] === 'register') {
            if (!touched['name'] || (!touched['email'] || !touched['registerPassword'])) {
                return true;
            }
        }

        if (values['loginPassword'] && values['loginPassword'].length < 3) {
            return true;
        } else if (values['registerPassword'] && values['registerPassword'].length < 3) {
            return true;
        } else if (
            values['email'] &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values['email'])
        ) {
            return true;
        }
    };
    return (
        <StyledForm {...props} touched={touched} values={values}>
            {children}
            <Button
                type='submit'
                kind='base'
                shape='rounded'
                size='xs'
                variant='primary'
                isDisabled={isDisabled()}
            >
                {buttonLabel}
            </Button>
        </StyledForm>
    );
};

export { Form };
