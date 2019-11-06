import styled, { css } from 'styled-components';
import { spacing } from '../../../utils';

import { EntriesListProps } from './';
import { Card } from '../../Card';

const StyledEntriesListWrapper = styled.div``;

const StyledEntriesList = styled.div`
    display: flex;
    & > * {
        margin-bottom: ${spacing('xs')};
    }
    ${({ theme }) => theme.breakpoint('md')`
        flex-direction: column;
    `}
`;

const StyledEntriesListHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledEntriesListActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 25%;
    & > * {
        margin-left: ${spacing('xs')};
    }
`;

const StyledEntriesListRow = styled.div<EntriesListProps>`
    ${({ orientation }) => {
        return orientation && orientation === 'vertical'
            ? css`
                  display: flex;
                  flex-wrap: wrap;
                  height: ${spacing('72')};
                  ${({ theme }) => theme.breakpoint('md')`
                        height: 100%;
                        & > * {
                            width: 100%;
                        }
                  `}
              `
            : css``;
    }}
    margin-top: ${spacing('md')};
    & > * {
        margin-right: ${spacing('md')};
        margin-bottom: ${spacing('md')};
    }
`;

const StyledEntriesCard = styled(Card)``;

export {
    StyledEntriesList,
    StyledEntriesListHeader,
    StyledEntriesListActions,
    StyledEntriesListRow,
    StyledEntriesCard,
    StyledEntriesListWrapper,
};
