import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {} from 'dotenv/config';
import uuidv4 from 'uuid/v4';

import { RootContext } from '../../../context/RootContext';
import { CREATE_ENTRY } from '../Entries.mutations';
import { GET_ENTRIES_BY_USERID } from '../Entries.queries';
import { Input } from '../../Input';
import { Form } from '../../Form';

const NewEntryForm: React.FC<any> = () => {
    const [createEntry] = useMutation(CREATE_ENTRY);
    const { authenticated, userId } = useContext(RootContext);

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
                <Form
                    onSubmit={handleSubmit}
                    noValidate
                    buttonLabel='Create entry'
                    touched={touched}
                    values={values}
                >
                    <Input
                        value={values['newEntryTitle'] || ''}
                        label='Title'
                        onChange={handleChange}
                        placeholder='Title'
                        hint='Give your dream a title'
                        name='newEntryTitle'
                        type='text'
                        id='new-entry-title'
                        touched={touched['newEntryTitle']}
                        isFull
                        isRequired
                    />
                    <Input
                        as='textarea'
                        value={values['newEntryBody'] || ''}
                        label='Body'
                        onChange={handleChange}
                        placeholder='What did you dream of last night?'
                        hint='Compose your entry'
                        name='newEntryBody'
                        type='text'
                        id='new-entry-body'
                        touched={touched['newEntryBody']}
                        isFull
                        isRequired
                    />
                </Form>
            )}
        </>
    );
};

export { NewEntryForm };
