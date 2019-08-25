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

const Journal: React.FC<any> = () => {
    return (
        <StyledFormPage>
            <Heading as='h1'>Create a new entry</Heading>
            <StyledNewEntryFormWrapper>
                <NewEntryForm />
            </StyledNewEntryFormWrapper>
            <EntriesList />
        </StyledFormPage>
    );
};

export { Journal };
