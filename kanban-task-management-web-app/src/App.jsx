import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./styled";
import { useContext } from "react";
import { BoardProvider, ModeContext } from './context';
import { MainTemplate } from "./templates";

const toastOptions = {
  
  duration: 2000,
  style: {
    fontSize: 'var(--fs-s)'
  },

}

function App() {

  const { mode } = useContext(ModeContext);

  return (
    <ThemeProvider theme={ mode === 'light' ? lightTheme : darkTheme }>
      <GlobalStyle/>
      <Toaster position="top-center" gutter={8} toastOptions={toastOptions}/>
      <BoardProvider>
        <MainTemplate/>
      </BoardProvider>
    </ThemeProvider>
  )
}

export default App;
