import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {store} from './app/store';
import { AuthProvider } from './Contexts/AuthContext';



const container = document.getElementById('root');
const root = createRoot(container);



root.render(

      <Provider store={store}>
      <AuthProvider>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </AuthProvider>
    </Provider>
      
   
);


