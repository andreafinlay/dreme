import React, { useState, useContext, useEffect } from 'react';
import {} from 'dotenv/config';
import { useMutation, ApolloConsumer } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';
import { CREATE_ENTRY } from './Entries.mutations';
import { RootContext } from '../../context/RootContext';
import { GET_ENTRIES } from './Entries.queries';
import { GET_CURRENT_USER } from '../Users/Users.mutations';

export const NewEntryForm: React.FC<any> = () => {
    let titleInput;
    let bodyInput;

    const [createEntry] = useMutation(CREATE_ENTRY);
    const [getCurrentUser] = useMutation(GET_CURRENT_USER);
    const [currentUser, setCurrentUser] = useState();
    const { authenticated, authBody } = useContext(RootContext);

    useEffect(() => {
        getCurrentUser({
            variables: {
                token: authBody,
                secret: process.env.REACT_APP_JWT_SECRET!,
            },
        }).then(res => {
            setCurrentUser(res && res.data.currentUserId.uuid);
        });
    }, [authBody]);

    return (
        <ApolloConsumer>
            {client => {
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
                                                userId: currentUser,
                                            },
                                            refetchQueries: [{ query: GET_ENTRIES }],
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
            }}
        </ApolloConsumer>
    );
};
