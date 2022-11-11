import React from "react";
import './App.css';


import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Services from "./components/Services";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { showGeneralModalAction } from "./Redux/action";
import Modal from './components/Modal'

// import Service from './components/Service';
// import Contact from './components/Contact';
// import Login from './components/Login';


 
const App=()=> {

  const { showGeneralModal } = useSelector(store => ({
    showGeneralModal : store.checkoutReducer._showGeneralModal
  }))

  const dispatch = useDispatch()


  const closeModal = () => {
    const toSend = {
      showModal: false
    }
    dispatch(showGeneralModalAction(toSend))
  }

  const remainModal = (event) => {
    event.stopPropagation();
  }
  
  return ( 
    <Router>
        <div>
          <Header />
          <Main />
          {showGeneralModal.showModal &&
                <div className="modal-wrapper">
                    <Modal
                        handleClose={closeModal}
                        remainClose={remainModal}
                        show={showGeneralModal.showModal}
                        title={showGeneralModal.title}
                        titleIcon={showGeneralModal.titleIcon}
                        className={showGeneralModal.class}
                        handleSkip={showGeneralModal.handleSkip}
                        overLayClickable={showGeneralModal.overLayClickable}
                    >
                        {showGeneralModal.component}
                    </Modal>
                </div>
            }
         </div>
   </Router>    
  );
} 

export default App;

