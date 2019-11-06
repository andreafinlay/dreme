import React, { useState } from 'react';
import styled from 'styled-components';

import { spacing } from '../../utils';
import { Heading } from '../../components/Heading';
import { EntriesList, NewEntryForm } from '../../components/EntriesTest';
import { Calendar } from '../../components/Calendar';

const StyledJournalPage = styled('div')`
    padding: 0 ${spacing('jb')} 0 ${spacing('jb')};
    ${({ theme }) => theme.breakpoint('sm')`
        padding: 0 ${spacing('lg')} 0 ${spacing('lg')};
    `}
`;

const StyledJournalWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${({ theme }) => theme.breakpoint('md')`
        flex-direction: column;
    `}
`;

const StyledJournalSection = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${spacing('jb')};
`;

const Journal: React.FC<any> = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = currentDate => {
        date !== currentDate && setDate(currentDate);
    };

    return (
        <StyledJournalPage>
            <StyledJournalWrapper>
                <StyledJournalSection>
                    <Heading as='h1'>Create a new entry</Heading>
                    <NewEntryForm />
                </StyledJournalSection>
                <StyledJournalSection>
                    <Heading as='h1'>Calendar</Heading>
                    <Calendar date={date} onDateChanged={handleDateChange} />
                </StyledJournalSection>
            </StyledJournalWrapper>
            <StyledJournalSection>
                <EntriesList />
            </StyledJournalSection>
        </StyledJournalPage>
    );
};

export { Journal };
