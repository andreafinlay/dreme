import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {} from 'dotenv/config';
import uuidv4 from 'uuid/v4';

import { RootContext } from '../../../context/RootContext';
import { GET_ENTRIES_BY_USERID } from '../Entries.queries';
import { CREATE_ENTRY } from '../Entries.mutations';
import { StyledNewEntryForm } from './styled';
import { Input } from '../../Input';

const NewEntryForm: React.FC<any> = () => {
    const { authenticated, userId } = useContext(RootContext);
    const [createEntry] = useMutation(CREATE_ENTRY);
    const [values, setValues] = useState({});
    const [touched, setTouched] = useState({ component: 'newEntry' });

    const handleChange = ({ target }: React.FormEvent<any>) => {
        setTouched({
            ...touched,
            [(target as HTMLInputElement).name]: true,
        });
        setValues({
            ...values,
            [(target as HTMLInputElement).name]: (target as HTMLInputElement).value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        createEntry({
            variables: {
                id: uuidv4(),
                title: values['newEntryTitle'] === '' ? null : values['newEntryTitle'],
                body: values['newEntryBody'] === '' ? null : values['newEntryBody'],
                userId: userId,
                createdat: new Date().toUTCString(),
                updatedat: new Date().toUTCString(),
            },
            refetchQueries: [{ query: GET_ENTRIES_BY_USERID, variables: { userId: userId } }],
        }).then(data => {
            if (data) {
                setValues({});
                setTouched({ component: 'newEntry' });
            }
        });
    };

    return (
        <>
            {authenticated && (
                <StyledNewEntryForm
                    values={values}
                    touched={touched}
                    onSubmit={handleSubmit}
                    buttonLabel='Create entry'
                    noValidate
                >
                    <Input
                        value={values['newEntryTitle'] || ''}
                        touched={touched['newEntryTitle']}
                        name='newEntryTitle'
                        type='text'
                        id='new-entry-title'
                        label='Title'
                        placeholder='Title'
                        hint='Give your dream a title'
                        onChange={handleChange}
                        isFull
                        isRequired
                    />
                    <Input
                        as='textarea'
                        value={values['newEntryBody'] || ''}
                        touched={touched['newEntryBody']}
                        name='newEntryBody'
                        type='text'
                        id='new-entry-body'
                        label='Body'
                        placeholder='What did you dream of last night?'
                        hint='Compose your entry'
                        onChange={handleChange}
                        isFull
                        isRequired
                    />
                </StyledNewEntryForm>
            )}
        </>
    );
};

export { NewEntryForm };
