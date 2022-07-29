import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root")
);