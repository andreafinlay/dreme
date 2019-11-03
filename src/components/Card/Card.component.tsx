import React from 'react';
import { StyledHeader, StyledBody, StyledFooter, StyledCard } from './styled';

export type CardOrientation = 'horizontal' | 'vertical';

export interface CardProps {
    /** Title of the card */
    title?: string | React.ReactNode;
    /** Content of the card */
    body?: string | React.ReactNode;
    /** Tect to dislay in the footer */
    footer?: string | React.ReactNode;
    /** The direction of the card */
    orientation: CardOrientation;
}

const Card: React.FC<CardProps> = ({ title, body, footer, orientation }) => {
    return (
        <StyledCard orientation={orientation}>
            <StyledHeader orientation={orientation}>{title}</StyledHeader>
            <StyledBody orientation={orientation}>{body}</StyledBody>
            <StyledFooter orientation={orientation}>{footer}</StyledFooter>
        </StyledCard>
    );
};

export { Card };
