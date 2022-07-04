import React from "react";
import './index.css';


import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Services from "./components/Services";

// import Service from './components/Service';
// import Contact from './components/Contact';
// import Login from './components/Login';


 
const App=()=> {
  
  return ( 
    <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact strict element={<Homepage />} />
            <Route path="/checkout" exact strict element={<Checkout />} />
            <Route path="/services" exact strict element={<Services />} />
           {/* <Route path="/contact" exact strict component={Contact}/> */}
           {/* <Route path="/login" exact strict component={Login}/> */}
          </Routes>
         </div>
   </Router>    
  );
} 

export default App;

