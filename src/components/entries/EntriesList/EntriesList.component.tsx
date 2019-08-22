import React, { useContext } from 'react';
import {} from 'dotenv/config';
import { useQuery } from '@apollo/react-hooks';

import { RootContext } from '../../../context/RootContext';
import { LogoutForm } from '../../Logout/Logout.component';
import { NewEntryForm } from '../NewEntryForm';
import { GET_ENTRIES_BY_USERID } from '../Entries.queries';

const EntriesList: React.FC<any> = () => {
    const { authenticated, userId } = useContext(RootContext);
    const { data, loading } = useQuery(GET_ENTRIES_BY_USERID, {
        variables: { userId: userId },
    });

    return (
        <>
            {authenticated && (
                <div>
                    {loading && <div>Loading...</div>}
                    {!loading && (
                        <div>
                            <div>
                                <NewEntryForm />
                                <br />
                                <h3>List of entries</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data &&
                                            data.allEntries &&
                                            data.allEntries.nodes.map(entry => (
                                                <tr key={entry.id}>
                                                    <td>{entry.title}</td>
                                                    <td>{entry.body}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    <LogoutForm />
                </div>
            )}
        </>
    );
};

export { EntriesList };
