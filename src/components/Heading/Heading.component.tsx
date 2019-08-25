import React from 'react';

import { StyledHeading } from './styled';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps {
    as?: HeadingTag;
}

const Heading: React.FC<HeadingProps> = ({ as, children }) => {
    return <StyledHeading as={as}>{children}</StyledHeading>;
};

export { Heading };
