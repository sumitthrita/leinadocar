import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { showGeneralModalAction } from "./Redux/action";
import Modal from './components/Modal'
import NewHeader from "./components/NewHeader";
import HomepageFooter from './components/HomepageFooter';



 
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
          {/* <Header /> */}
          <NewHeader />
          <Main />
          <HomepageFooter />
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

