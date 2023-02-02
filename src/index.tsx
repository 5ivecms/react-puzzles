import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { persistor, store } from './core/store/store'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SnackbarProvider
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            autoHideDuration={2000}
            maxSnack={5}
          >
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
