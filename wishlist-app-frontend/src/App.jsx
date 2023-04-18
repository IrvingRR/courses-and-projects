import { Toaster } from 'react-hot-toast';
import { Router } from './router';
import { SessionProvider } from './contexts/SessionContext';

const toastOptionsObject = {
    duration: 3000,
    success: {
        iconTheme: {
        primary: 'var(--primary-gradient-color)',
        secondary: 'white',
        },
    },

    error: {
        iconTheme: {
        primary: 'var(--secondary-gradient-color)',
        secondary: 'white',
        },
    },
}

const App = () => {
  return (
    <SessionProvider>
      <Toaster position="top-center" gutter={5} toastOptions={ toastOptionsObject } />
      <Router/>
    </SessionProvider>
  )
}

export default App;