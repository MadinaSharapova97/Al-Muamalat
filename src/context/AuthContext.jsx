import React, { useState } from "react";
import { createContext } from "react";
import { Request } from "../pages/services/Request";
import { toast } from "react-toastify";

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
                toast.success("Muvoffaqiyatli amalga oshirildi")

            })
            .catch((error) => {
                console.log(error);
                toast.error("Xatolik yuz berdi")
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