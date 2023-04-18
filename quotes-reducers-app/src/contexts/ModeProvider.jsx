import { useEffect, useState } from "react";
import { ModeContext } from "./ModeContext";

export const ModeProvider = ({ children }) => {

    const initialValue = localStorage.getItem('mode') || 'light';
    const [mode, setMode] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem('mode', mode);
    }, [mode]);

    const handleChangeMode = () => {

        if(mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }

    }

    return (
        <ModeContext.Provider value={{ mode, handleChangeMode }}>
            { children }
        </ModeContext.Provider>
    )
}
