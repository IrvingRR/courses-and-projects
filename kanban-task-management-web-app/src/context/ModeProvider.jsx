import { ModeContext } from "./ModeContext";
import { useState, useEffect } from "react";

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
        {children}
    </ModeContext.Provider>
  )
}
