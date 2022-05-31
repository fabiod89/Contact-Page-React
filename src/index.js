import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router,Route, Routes,BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'


import Header from './header';
import Footer from './footer'

import App from "./app";
import Compose from "./compose"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

  <div>
    <Header/>
  </div>

  <div className="container-fluid" >
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/compose" element={<Compose />}></Route>
      </Routes>
    </BrowserRouter>
    
  </div>

  <div className="d-flex flex-column">
    <Footer/>
  </div>

</>);

