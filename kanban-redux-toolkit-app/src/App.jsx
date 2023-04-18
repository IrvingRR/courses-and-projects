import { Router } from "./router";
import { GlobalStyle } from "./styled";
import { Toaster } from "react-hot-toast";

const toasterOptions = {
  style: {
    fontSize: 'var(--fs-xs)',
  },

  duration: 2000,

  success: {
    style: {
      fontSize: 'var(--fs-xs)',
    },
  },
  error: {
    style: {
      fontSize: 'var(--fs-xs)',
    },
  },
};

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={toasterOptions}
        
      />
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App;
