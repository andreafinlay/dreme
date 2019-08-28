import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../utils';
import { EntriesList, NewEntryForm } from '../../components/Entries';
import { Heading } from '../../components/Heading';

const StyledFormPage = styled('div')`
    padding: ${spacing('12')};
`;

const StyledNewEntryFormWrapper = styled('div')`
    margin-top: ${spacing('sm')};
`;

const StyledNewEntryFormHeader = styled('div')`
    display: flex;
    & > * {
        width: 100%;
    }
`;

const Journal: React.FC<any> = () => {
    return (
        <StyledFormPage>
            <StyledNewEntryFormHeader>
                <Heading as='h1'>Create a new entry</Heading>
                <Heading as='h1'>Calendar</Heading>
            </StyledNewEntryFormHeader>
            <StyledNewEntryFormWrapper>
                <NewEntryForm />
            </StyledNewEntryFormWrapper>
            <EntriesList />
        </StyledFormPage>
    );
};

export { Journal };
