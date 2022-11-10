import React from "react";
import './index.css';


import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Services from "./components/Services";
import Main from "./components/Main";

// import Service from './components/Service';
// import Contact from './components/Contact';
// import Login from './components/Login';


 
const App=()=> {
  
  return ( 
    <Router>
        <div>
          <Header />
          <Main />
         </div>
   </Router>    
  );
} 

export default App;

