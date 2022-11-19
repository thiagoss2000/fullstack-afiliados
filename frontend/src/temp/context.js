import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [reload, setReload] = useState(false);
    const [sellers, setSellers] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [sellerSelected, setSellerSelected] = useState('');

    return (
        <AuthContext.Provider value={{
            reload, setReload,
            sellers, setSellers,
            dataList, setDataList,
            sellerSelected, setSellerSelected
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}