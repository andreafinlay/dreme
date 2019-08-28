import React, { useContext, useState, useEffect } from 'react';
import {} from 'dotenv/config';
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

export interface EntriesListProps {
    /** The orientation of the page */
    orientation?: string;
    /** The sort order of the list */
    sortOrder?: string;
}

const EntriesList: React.FC<any> = () => {
    const { authenticated, userId } = useContext(RootContext);
    const { data } = useQuery(GET_ENTRIES_BY_USERID, {
        variables: { userId: userId },
    });
    const [direction, setDirection] = useState('vertical');
    const [sortOrder, setSortOrder] = useState('newest');
    const [nodes, setNodes] = useState([] as any);

    const parseTime = time => {
        const parsedTime = time.split('');
        parsedTime.length = 8;
        parsedTime.join('');
        return parsedTime;
    };

    const toggleDirection = () => {
        return direction === 'vertical'
            ? (setSortOrder('newest'), setDirection('horizontal'))
            : (setSortOrder('newest'), setDirection('vertical'));
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

        return () => {
            setNodes([]);
        };
    }, [data, sortOrder]);

    return (
        <>
            {authenticated && (
                <StyledEntriesListWrapper>
                    <StyledEntriesListHeader>
                        <Heading as='h1'>Entries</Heading>
                        <StyledEntriesListActions>
                            <Button
                                size='xs'
                                variant='primary'
                                kind='base'
                                shape='rounded'
                                onClick={toggleDirection}
                            >
                                Layout: {direction === 'vertical' ? 'grid' : 'list'}
                            </Button>
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
                        <StyledEntriesListRow orientation={direction}>
                            {nodes.map(entry => {
                                const date = new Date(entry.createdat).toDateString();
                                const time = parseTime(new Date(entry.createdat).toTimeString());
                                return (
                                    <StyledEntriesCard
                                        direction={direction}
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
