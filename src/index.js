import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import "./fonts/roboto/Roboto-Thin.ttf";
import "./fonts/lato/Lato-Thin.ttf";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App/>
  </Router>
);




