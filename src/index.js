import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./pages/App";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement);
