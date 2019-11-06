import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { RootContext } from '../../../context/RootContext';
import { GET_ENTRIES_BY_USERID } from '../Entries.queries';
import {
    StyledEntriesList,
    StyledEntriesListHeader,
    StyledEntriesListActions,
    StyledEntriesListRow,
    StyledEntriesCard,
    StyledEntriesListWrapper,
} from './styled';
import { Heading } from '../../Heading';
import { Button } from '../../Button';
import { useBreakpoint } from '../../../hooks';

export type EntriesListOrientation = 'vertical' | 'horizontal';
export type EntriesListSortOrder = 'newest' | 'oldest';

export interface EntriesListProps {
    /** The orientation of the page */
    orientation?: EntriesListOrientation;
    /** The sort order of the list */
    sortOrder?: EntriesListSortOrder;
}

const EntriesList: React.FC<EntriesListProps> = () => {
    const { authenticated, userId } = useContext(RootContext);
    const isMobile = !useBreakpoint('md');

    const { data } = useQuery(GET_ENTRIES_BY_USERID, {
        variables: { userId: userId },
    });
    const [orientation, setOrientation] = useState('vertical');
    const [sortOrder, setSortOrder] = useState('newest');
    const [nodes, setNodes] = useState([] as any);

    const parseTime = (time: string) => {
        const parsedTime = time.split('');
        parsedTime.length = 8;
        parsedTime.join('');
        return parsedTime;
    };

    const toggleOrientation = () => {
        return orientation === 'vertical'
            ? (setSortOrder('newest'), setOrientation('horizontal'))
            : (setSortOrder('newest'), setOrientation('vertical'));
    };

    const toggleSortOrder = () => {
        return sortOrder === 'newest'
            ? (setSortOrder('oldest'), setNodes(data.allEntries.nodes.reverse()))
            : (setSortOrder('newest'), setNodes(data.allEntries.nodes));
    };

    useEffect(() => {
        if (data && data.allEntries) {
            return sortOrder === 'newest'
                ? setNodes(data.allEntries.nodes)
                : setNodes(data.allEntries.nodes.reverse());
        }

        isMobile && setOrientation('vertical');

        return () => {
            setNodes([]);
        };
    }, [data, sortOrder, isMobile]);

    return (
        <>
            {authenticated && (
                <StyledEntriesListWrapper>
                    <StyledEntriesListHeader>
                        <Heading as='h1'>Entries</Heading>
                        <StyledEntriesListActions>
                            {isMobile && (
                                <Button
                                    size='xs'
                                    variant='primary'
                                    kind='base'
                                    shape='rounded'
                                    onClick={toggleOrientation}
                                >
                                    Layout: {orientation === 'vertical' ? 'grid' : 'list'}
                                </Button>
                            )}
                            <Button
                                size='xs'
                                variant='primary'
                                kind='base'
                                shape='rounded'
                                onClick={toggleSortOrder}
                            >
                                Order: {sortOrder}
                            </Button>
                        </StyledEntriesListActions>
                    </StyledEntriesListHeader>
                    <StyledEntriesList>
                        <StyledEntriesListRow orientation={orientation}>
                            {nodes.map(entry => {
                                const date = new Date(entry.createdat).toDateString();
                                const time = parseTime(new Date(entry.createdat).toTimeString());
                                return (
                                    <StyledEntriesCard
                                        orientation={orientation}
                                        key={entry.id}
                                        title={entry.title}
                                        body={entry.body}
                                        footer={
                                            <>
                                                <div>{date}&nbsp;</div>
                                                <div>{time}</div>
                                            </>
                                        }
                                    />
                                );
                            })}
                        </StyledEntriesListRow>
                    </StyledEntriesList>
                </StyledEntriesListWrapper>
            )}
        </>
    );
};

export { EntriesList };
