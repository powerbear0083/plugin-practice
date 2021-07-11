import './sass/Custom.scss';
import './sass/Icon.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App.js";

let root = document.getElementById('root')
root.className += "layout-max-width"
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);