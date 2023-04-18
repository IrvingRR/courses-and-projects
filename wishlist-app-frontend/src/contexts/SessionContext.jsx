import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({children}) => {
    const [session, setSession] = useState(JSON.parse(localStorage.getItem('wishlist-auth')) || {});

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            { children }
        </SessionContext.Provider>
    );
};