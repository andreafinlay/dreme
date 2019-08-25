import React from 'react';
import styled from 'styled-components';

import { StyledButton, StyledButtonContainer, StyledButtonLabel } from './styled';

export type ButtonType = 'submit' | 'button' | 'reset';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'inverted'
    | 'danger'
    | 'warning'
    | 'success';

export type ButtonKind = 'base' | 'outline' | 'minimal';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonShape = 'default' | 'rounded' | 'round';

export type ButtonTag = 'a' | 'button';

export interface ButtonProps {
    children?: React.ReactNode;
    /** A link to navigate to */
    href?: string;
    /** The target attribute for <a> */
    target?: string;
    /** Disable the button */
    isDisabled?: boolean;
    /** Make the button take the full width */
    isFull?: boolean;
    /** Switch to a loading state */
    isLoading?: boolean;
    /** Maintain the active state */
    isSelected?: boolean;
    /** Change the way to render a variant */
    kind?: ButtonKind;
    /** The shape of the button */
    shape?: ButtonShape;
    /** The size of the button */
    size?: ButtonSize;
    /** The HTML type of button */
    type?: ButtonType;
    /** The styling variation of the button */
    variant?: ButtonVariant;
    /** Tag to render the button as */
    asTag?: ButtonTag;
    /** Method to call on button click */
    onClick?: Function;
}

const Button: React.FC<ButtonProps> = ({
    children,
    isDisabled,
    isLoading,
    kind,
    shape,
    size,
    variant,
    type,
    asTag,
    ...props
}) => {
    const tag = !!props.href ? 'a' : asTag;
    const typeAttr = tag === 'a' ? 'none' : type;
    return (
        <StyledButton
            as={tag}
            {...(typeAttr === 'none' ? {} : { type: typeAttr })}
            variant={variant}
            kind={kind}
            type={type}
            size={size}
            shape={shape}
            isDisabled={isDisabled}
            {...props}
        >
            <StyledButtonContainer>
                {shape !== 'round' && <StyledButtonLabel>{children}</StyledButtonLabel>}
            </StyledButtonContainer>
            {isLoading && <div>Loading...</div>}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'primary',
    kind: 'base',
    shape: 'default',
    size: 'md',
    asTag: 'button',
    type: 'button',
};

const IconButton = styled(Button)`
    padding: 0;
`;

const LinkButton = styled(Button).attrs(() => ({
    kind: 'minimal',
}))<ButtonProps>`
    height: auto;
    padding: 0;
    border: none;
    outline: none;
`;

export { Button, IconButton, LinkButton };
