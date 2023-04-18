import { Router } from "./router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthProvider";

const toastOptions = {
  duration: 2000,
  style: {
    fontSize: '14px'
  },

  iconTheme: {
    fontSize: '14px'
  },
}

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" gutter={8} toastOptions={ toastOptions }/>
      <Router/>
    </AuthProvider>
  )
}

export default App;