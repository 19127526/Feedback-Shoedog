import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react';



export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MyProvider>
        <App />
        </MyProvider>
    </BrowserRouter>
)
