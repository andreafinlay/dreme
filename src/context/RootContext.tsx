import React, { useEffect, useState } from 'react';
import {} from 'dotenv/config';

interface IContextProps {
    authenticated: boolean;
    setAuthenticated: Function;
    token: any;
    setToken: Function;
    userId: any;
    setUserId: Function;
    name: any;
    setName: Function;
}

const RootContext = React.createContext({} as IContextProps);

const Authenticate: React.FC<any> = ({ children }) => {
    const prevAuth = JSON.parse(localStorage.getItem('authenticated')!);
    const prevToken = JSON.parse(localStorage.getItem('token')!);
    const prevUserId = JSON.parse(localStorage.getItem('userId')!);
    const prevName = JSON.parse(localStorage.getItem('name')!);

    const [authenticated, setAuthenticated] = useState(prevAuth);
    const [token, setToken] = useState(prevToken);
    const [userId, setUserId] = useState(prevUserId);
    const [name, setName] = useState(prevName);

    useEffect(() => {
        localStorage.setItem('authenticated', JSON.stringify(authenticated));
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('name', JSON.stringify(name));
    }, [authenticated, token, userId, name]);

    const context = {
        authenticated,
        setAuthenticated,
        token,
        setToken,
        userId,
        setUserId,
        name,
        setName,
    };

    return <RootContext.Provider value={context}> {children} </RootContext.Provider>;
};

export { RootContext, Authenticate };
