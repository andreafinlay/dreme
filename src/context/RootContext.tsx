import React, { useEffect, useState } from 'react';

let RootContext;

const Authenticate: React.FC<any> = ({ children }) => {
    const prevAuth = localStorage.getItem('authenticated') || false;
    const prevAuthBody = localStorage.getItem('authBody') || null;

    const [authenticated, setAuthenticated]: any = useState(prevAuth);
    const [authBody, setAuthBody]: any = useState(prevAuthBody);

    useEffect(() => {
        localStorage.setItem('authenticated', authenticated);
        localStorage.setItem('authBody', authBody);
    }, [authenticated, authBody]);

    const context = {
        authenticated,
        setAuthenticated,
        authBody,
        setAuthBody,
    };

    RootContext = React.createContext(context);
    return <RootContext.Provider value={context}> {children} </RootContext.Provider>;
};

export { RootContext, Authenticate };
