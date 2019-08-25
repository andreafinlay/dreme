import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.component';
import { config } from './theme';

const ButtonCSS = () => {
    return css<any>`
        ${config.base};
        ${({ size }) => config.size[size]};
        ${({ kind }) => config.kind[kind]};
        ${({ shape }) => config.shape[shape]};
        ${({ variant, kind }) => config.variant[variant][kind].normal};
        &:hover {
            ${({ noHover, variant, kind }) =>
                noHover
                    ? css`
                          @media (hover: none) and (pointer: fine) {
                              ${config.variant[variant][kind].hover};
                          }
                      `
                    : css`
                          @media (hover: hover) and (pointer: fine) {
                              ${config.variant[variant][kind].hover};
                          }
                      `}
        }
        ${({ isLoading }) =>
            isLoading &&
            css`
                pointer-events: none;
            `}
        &:focus,
        &:active {
            outline: none;
        }
    `;
};

const StyledButton = styled('div').attrs(({ isDisabled, isSelected }) => ({
    disabled: isDisabled,
    'aria-pressed': isSelected,
}))<ButtonProps>`
    cursor: pointer;
    border: none;
    text-align: center;
    white-space: nowrap;
    min-width: fit-content;
    text-decoration: none;
    overflow: hidden;
    background-color: transparent;
    display: ${({ isFull }) => (isFull ? 'block' : 'inline-block')};
    width: ${({ isFull }) => (isFull ? '100%' : 'auto')};

    ${ButtonCSS}
    &[disabled],
        &:disabled {
        pointer-events: none;
        ${({ kind }) => config.disabled[kind]};
    }
`;

const StyledButtonContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const StyledButtonLabel = styled('span')``;

export { StyledButton, StyledButtonContainer, StyledButtonLabel };
