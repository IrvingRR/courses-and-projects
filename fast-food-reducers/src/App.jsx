import { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { Router } from "./components";
import { GlobalStyles } from "./style-components/global-styles";
import { ThemeProvider } from 'styled-components';

const optionsToaster = {
    style: {
      fontSize: 'var(--fs-s)',
    },

    error: {
      iconTheme: { primary: 'var(--primary-color)', },
      style: {
        fontSize: 'var(--fs-s)' 
      }
    },
};

const darkTheme = {
  background: 'var(--bg-dark)',
  fontColor: 'var(--color-dark)',
  bgComponent: 'var(--bg-component-dark)',
  borderColor: 'var(--border-color-dark)',
  thirdColor: 'var(--third-color-dark)',
  thirdColorHover: 'var(--third-color-dark-hover)'
};

const lightTheme = {
  background: 'var(--bg-light)',
  fontColor: 'var(--color-light)',
  bgComponent: 'var(--bg-component-light)',
  borderColor: 'var(--border-color-light)',
  thirdColor: 'var(--third-color-light)',
  thirdColorHover: 'var(--third-color-hover-light)'
};

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme}>
      <Toaster toastOptions={ optionsToaster }/>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  )
}

export default App
