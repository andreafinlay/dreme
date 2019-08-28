import React from 'react';
import { StyledHeader, StyledBody, StyledFooter, StyledCard } from './styled';

export type CardDirection = 'horizontal' | 'vertical';

export interface CardProps {
    /** Title of the card */
    title?: string | React.ReactNode;
    /** Content of the card */
    body?: string | React.ReactNode;
    /** Tect to dislay in the footer */
    footer?: string | React.ReactNode;
    /** The direction of the card */
    direction?: CardDirection;
}

const Card: React.FC<CardProps> = ({ title, body, footer, direction }) => {
    return (
        <StyledCard direction={direction}>
            <StyledHeader direction={direction}>{title}</StyledHeader>
            <StyledBody direction={direction}>{body}</StyledBody>
            <StyledFooter direction={direction}>{footer}</StyledFooter>
        </StyledCard>
    );
};

export { Card };
