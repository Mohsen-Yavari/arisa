import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';


import './fonts/B-NAZANIN.TTF';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';

import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />

    </BrowserRouter>
  
);


