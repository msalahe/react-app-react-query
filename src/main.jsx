import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './store/store.js'
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const user = { name : "salah edddine"};

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Store.Provider value={user}>
        <App />
      </Store.Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
