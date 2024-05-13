import React from 'react';
import ReactDOM from 'react-dom/client';  
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from '/contexts/AuthContext';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
);
