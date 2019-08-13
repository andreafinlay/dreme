import React, { useEffect, useState } from 'react';

let RootContext;

const Authenticate: React.FC<any> = ({ children }) => {
    const prevAuth = window.localStorage.getItem('authenticated') ? true : false;
    const prevAuthBody = window.localStorage.getItem('authBody');

    const [authenticated, setAuthenticated]: any = useState(prevAuth);
    const [authBody, setAuthBody]: any = useState(prevAuthBody);

    useEffect(() => {
        window.localStorage.setItem('authenticated', authenticated);
        window.localStorage.setItem('authBody', authBody);
    }, [authenticated, authBody]);

    const context = {
        authenticated,
        setAuthenticated,
        authBody,
        setAuthBody,
    };

    RootContext = React.createContext(context);
    return <RootContext.Provider value={context}>{children}</RootContext.Provider>;
};

export { RootContext, Authenticate };
