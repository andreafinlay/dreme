import React, { useContext } from 'react';
import { ApolloConsumer } from '@apollo/react-hooks';
import { RootContext } from '../../context/RootContext';

const LogoutForm: React.FC<any> = () => {
    const { setAuthenticated, setAuthBody } = useContext(RootContext);

    return (
        <ApolloConsumer>
            {client => {
                return (
                    <div>
                        <br />
                        <h1>Log out</h1>
                        <br />
                        <form
                            onSubmit={e => {
                                e.preventDefault();

                                setAuthenticated(false);
                                setAuthBody(null);
                            }}
                        >
                            <button style={{ backgroundColor: 'green' }} type='submit'>
                                Log out
                            </button>
                        </form>
                        <br />
                    </div>
                );
            }}
        </ApolloConsumer>
    );
};

export { LogoutForm };
