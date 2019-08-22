import React, { useContext } from 'react';
import {} from 'dotenv/config';
import { useMutation } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';
import { CREATE_ENTRY } from '../Entries.mutations';
import { RootContext } from '../../../context/RootContext';
import { GET_ENTRIES_BY_USERID } from '../Entries.queries';

const NewEntryForm: React.FC<any> = () => {
    let titleInput;
    let bodyInput;

    const [createEntry] = useMutation(CREATE_ENTRY);
    const { authenticated, userId } = useContext(RootContext);

    return (
        <>
            {authenticated && (
                <div>
                    <br />
                    <h1>Create Entry</h1>
                    <br />
                    <form
                        style={{ border: 'solid 1px black', width: '500px' }}
                        onSubmit={e => {
                            e.preventDefault();
                            createEntry({
                                variables: {
                                    id: uuidv4(),
                                    title: titleInput.value,
                                    body: bodyInput.value,
                                    userId: userId,
                                },
                                refetchQueries: [
                                    { query: GET_ENTRIES_BY_USERID, variables: { userId: userId } },
                                ],
                            });
                            titleInput.value = '';
                            bodyInput.value = '';
                        }}
                    >
                        <input
                            ref={node => {
                                titleInput = node;
                            }}
                            placeholder='Title'
                        />
                        <input
                            ref={node => {
                                bodyInput = node;
                            }}
                            placeholder='Body'
                        />
                        <button style={{ backgroundColor: 'pink' }} type='submit'>
                            Create Entry
                        </button>
                    </form>
                    <br />
                </div>
            )}
        </>
    );
};

export { NewEntryForm };
