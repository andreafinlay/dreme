import styled, { css } from 'styled-components';
import { spacing } from '../../../utils';

import { EntriesListProps } from './';
import { Card } from '../../Card';

const StyledEntriesListWrapper = styled('div')`
    margin-top: ${spacing('lg')};
`;

const StyledEntriesList = styled('div')`
    display: flex;
    & > * {
        margin-bottom: ${spacing('xs')};
    }
`;

const StyledEntriesListHeader = styled('div')`
    display: flex;
    justify-content: space-between;
`;

const StyledEntriesListActions = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 25%;
    & > * {
        margin-left: ${spacing('xs')};
    }
`;

const StyledEntriesListRow = styled('div')<EntriesListProps>`
    ${({ orientation }) => {
        return orientation && orientation === 'vertical'
            ? css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  height: ${spacing('72')};
                  &:not:last-child {
                      justify-content: center;
                  }
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
