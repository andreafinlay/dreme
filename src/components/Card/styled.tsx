import styled, { css } from 'styled-components';

import { palette, spacing } from '../../utils';
import { CardProps } from './Card.component';

const StyledHeader = styled('div')<CardProps>`
    ${({ direction }) => {
        return direction === 'horizontal'
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

const StyledBody = styled('div')<CardProps>`
    ${({ direction }) => {
        return direction === 'horizontal'
            ? css`
                  width: 100%;
              `
            : css`
                  height: 75%;
                  overflow: scroll;
              `;
    }};
    padding: ${spacing('md')};
`;

const StyledFooter = styled('div')<CardProps>`
    ${({ direction }) => {
        return direction === 'horizontal'
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

const StyledCard = styled('div')<CardProps>`
    display: flex;
    ${({ direction }) => {
        return direction === 'vertical'
            ? css`
                  width: 31%;
                  height: 100%;
                  flex-direction: column;
              `
            : css``;
    }}
    color: ${palette('neutral', '900')};
    background-color: ${palette('neutral', '0')};
    border: solid 1px ${palette('primary', '500')};
    border-radius: 5px;
`;

export { StyledHeader, StyledBody, StyledFooter, StyledCard };
