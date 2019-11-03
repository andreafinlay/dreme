import styled, { css } from 'styled-components';
import { InputProps } from './Input.component';
import { palette, spacing } from '../../utils';

const StyledInput = styled('input').attrs(({ isDisabled }: InputProps) => ({
    disabled: isDisabled,
}))<InputProps>`
    appearance: none;
    resize: none;
    autocomplete: off;
    autocorrect: off;
    autocapitalize: off;
    spellcheck: false;

    box-sizing: border-box;
    ${({ isFull, as }) => {
        return isFull
            ? as === 'textarea'
                ? css`
                      width: 100%;
                      height: 100%;
                  `
                : css`
                      width: 100%;
                  `
            : css``;
    }};

    &:focus {
        outline: none;
    }

    &[disabled],
    &:disabled {
        background-color: ${palette('neutral', '400')};
    }

    border: 1px solid;
    border-color: ${({ isInvalid }) =>
        isInvalid ? palette('danger', '300') : palette('primary', '500')};
    border-bottom: none;
    border-left: none;
    ${({ minimal }) => {
        return (
            minimal &&
            css`
                border: none;
            `
        );
    }};

    padding: ${spacing('xs')} 0 ${spacing('sm')} ${spacing('xs')};
`;

export { StyledInput };
