import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { GlobalStyle, darkTheme, lightTheme } from "./styled";
import { Router } from "./router";
import { ModeContext, SessionProvider } from "./contexts";
import { Toaster } from 'react-hot-toast';

const toastOptions = {
  
  duration: 2000,
  style: {
    fontSize: 'var(--fs-s)'
  },

}

function App() {

  const { mode } = useContext(ModeContext);
  
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <SessionProvider>
          <GlobalStyle/>
          <Toaster position="top-center" gutter={8} toastOptions={toastOptions}/>
          <Router/>
        </SessionProvider>
    </ThemeProvider>
  )
}

export default App;