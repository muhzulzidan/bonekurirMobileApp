import React, { useState, createContext } from 'react';

export type GlobalContent = {
    user: any
    setUser: (c: any) => void
}

interface AuthenticatedUserProviderProps {
    children : any
}

export const AuthenticatedUserContext = createContext < GlobalContent > ({
    user: 'hello', // set a default value
    setUser: () => { },
});



export const AuthenticatedUserProvider: React.FC<AuthenticatedUserProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};