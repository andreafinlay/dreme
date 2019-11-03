import styled, { css } from 'styled-components';

import { palette, spacing } from '../../utils';
import { CardProps } from './Card.component';

const StyledHeader = styled.div<CardProps>`
    ${({ orientation }) => {
        return orientation === 'horizontal'
            ? css`
                  width: 15%;
                  border-right: solid 1px ${palette('primary', '500')};
              `
            : css`
                  height: 5%;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  border-bottom: solid 1px ${palette('primary', '500')};
              `;
    }};
    padding: ${spacing('md')};
`;

const StyledBody = styled.div<CardProps>`
    ${({ orientation }) => {
        return orientation === 'horizontal'
            ? css`
                  width: 100%;
              `
            : css`
                  overflow: scroll;
                  height: 100%;
              `;
    }};
    padding: ${spacing('md')};
`;

const StyledFooter = styled.div<CardProps>`
    ${({ orientation }) => {
        return orientation === 'horizontal'
            ? css`
                  width: 16%;
                  white-space: nowrap;
                  border-left: solid 1px ${palette('primary', '500')};
              `
            : css`
                  display: flex;
                  border-top: solid 1px ${palette('primary', '500')};
              `;
    }};
    padding: ${spacing('md')};
`;

const StyledCard = styled.div<CardProps>`
    display: flex;
    ${({ orientation }) => {
        return orientation === 'horizontal'
            ? css``
            : css`
                  width: 31%;
                  height: 100%;
                  flex-direction: column;
              `;
    }}
    color: ${palette('neutral', '900')};
    background-color: ${palette('neutral', '0')};
    border: solid 1px ${palette('primary', '500')};
`;

export { StyledHeader, StyledBody, StyledFooter, StyledCard };
