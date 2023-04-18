import { Toaster } from "react-hot-toast";
import { Router } from "./router";
import { GlobalStyles } from "./styled/globalStyles";

const toastOptions = {
  style: {
    fontSize: 'var(--fs-xs)',
    duration: 1500
  },
}

function App() {
  return (
    <>
      <Toaster toastOptions={toastOptions}/>
      <GlobalStyles/>
      <Router/>
    </>
  );
};

export default App;