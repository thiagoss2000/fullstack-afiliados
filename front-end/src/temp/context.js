import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {

    return (
        <AuthContext.Provider value={{

        }}>
            {props.children}
        </AuthContext.Provider>
    )
}