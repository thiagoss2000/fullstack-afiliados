import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [reload, setReload] = useState(false);
    const [page, setPage] = useState("search");
    
    return (
        <AuthContext.Provider value={{
            reload, setReload,
            page, setPage
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}