import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button'
import React, { useState } from 'react'
import { onlyNumbers } from './helpingFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { setPhone, showGeneralModalAction } from '../Redux/action'
import CarSelectionModal from './CarSelectionModal'
import { Navigate } from 'react-router-dom';

const HomepageEasyBook = props => {

    const [number, setNumber] = useState("")
    const [redirect, setRedirect] = useState(false)

    const { _selectedVehicle } = useSelector(store => ({
        _selectedVehicle : store.checkoutReducer._selectedVehicle
    }))

    const dispatch = useDispatch()

    const handlePhone = e => {
        let finalValue = onlyNumbers(e.target.value)
        if(finalValue.length <= 10)
            setNumber(finalValue)
    }

    const closeModal = () => {
        const toSend = {
            showModal : false
        }
        dispatch(showGeneralModalAction(toSend))
    }

    const handleModal = e => {
        const toSend = {
            component: <CarSelectionModal closeModal={closeModal} />, 
            title: "",
            showModal: true,
            handleClose: closeModal
        }
        dispatch(showGeneralModalAction(toSend))
    }

    const handleServicePage = e => {
        if(_selectedVehicle.engineType !== "" && number.length === 10){
            dispatch(setPhone(number))
            setRedirect(true)
        }
    }

    return (
        <div className='easy_book_home'>
            <div className='easy_book_title'>A simpler way to book a car service</div>
            <div className='carAndModal_car_selection' onClick={handleModal} >
                <div>{_selectedVehicle.engineType !== "" ?
                        <div>
                            <span className='company'>{_selectedVehicle.company},</span>
                            <span className='modalname'>{_selectedVehicle.carModal},</span>
                            <span className='engineType'>{_selectedVehicle.engineType}</span>
                        </div>
                    :
                        "Select Your Car Details"
                    }
                </div>
                <div><FontAwesomeIcon icon={faAngleDown} /> </div>
            </div>
            <div className='carAndModal_phone'>
                <input inputMode='numeric' value={number} onChange={handlePhone} placeholder="Enter Mobile Number" />
            </div>
            <Button className="easy_book_btn_c" type="easy_book_home_bt pointer" handleMe={handleServicePage} label="Check Price" />
            {redirect && <Navigate to="/services" />}
        </div>
    )
}

export default HomepageEasyBook;