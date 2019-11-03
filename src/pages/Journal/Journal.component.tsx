import React, { useState } from 'react';
import styled from 'styled-components';

import { spacing } from '../../utils';
import { Heading } from '../../components/Heading';
import { EntriesList, NewEntryForm } from '../../components/Entries';
import { Calendar } from '../../components/Calendar';

const StyledJournalPage = styled('div')`
    padding: ${spacing('12')};
`;

const StyledJournalWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${spacing('sm')};
    ${({ theme }) => theme.breakpoint('md')`
        flex-direction: column;
    `}
`;

const StyledJournalHeader = styled('div')`
    display: flex;
    & > * {
        width: 100%;
    }
`;

const Journal: React.FC<any> = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = currentDate => {
        date !== currentDate && setDate(currentDate);
    };

    return (
        <StyledJournalPage>
            <StyledJournalHeader>
                <Heading as='h1'>Create a new entry</Heading>
                <Heading as='h1'>Calendar</Heading>
            </StyledJournalHeader>
            <StyledJournalWrapper>
                <NewEntryForm />
                <Calendar date={date} onDateChanged={handleDateChange} />
            </StyledJournalWrapper>
            <EntriesList />
        </StyledJournalPage>
    );
};

export { Journal };
