import React, { useState } from "react";
import { createContext } from "react";
import { Request } from "../pages/services/Request";

const defaultProvider = {
    loading: true,
    setLoading: () => Boolean,
    register: () => Promise.resolve(),
}

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(defaultProvider?.loading);

    const handleRegister = (submitData) => {
        setLoading(false);
        Request.post("/auth/signup", submitData)
            .then((response) => {
                console.log(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(true);
            });
    }

    const values = {
        loading,
        register: handleRegister
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };