import { faPencil, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCard, showGeneralModalAction } from '../Redux/action';
import Button from './Button';
import CarSelectionModal from './CarSelectionModal';
import { findTotalAmount } from './helpingFunctions';

const CheckoutCart = props => {

    const {_selectedVehicle, _selectedServices} = useSelector((store) => ({
        _selectedVehicle : store.checkoutReducer._selectedVehicle,
        _selectedServices : JSON.parse(store.checkoutReducer._services)
    }))

    const dispatch = useDispatch()

    const handleDelete = (index) => {
        let allServices = [..._selectedServices]
        allServices.splice(index, 1)
        dispatch(addToCard(allServices))
    }

    const closeModal = () => {
        const toSend = {
            showModal : false
        }
        dispatch(showGeneralModalAction(toSend))
    }

    const handleCarSelectionModal = e => {
        const toSend = {
            component: <CarSelectionModal closeModal={closeModal} />, 
            title: "",
            showModal: true,
            handleClose: closeModal
        }
        dispatch(showGeneralModalAction(toSend))
    }

    return (
        <div className='checkout_cart'>
            {_selectedVehicle.engineType !== "" ?
                <div className='checkoutCart__vehicle'>
                    <div className='checkoutCart_vehicleInfo'>
                        <div className='vehicleName'> {_selectedVehicle.company} {_selectedVehicle.carModal}<span className='vehicleType' >{_selectedVehicle.engineType} </span> </div>
                        <div className='changeIcon' onClick={handleCarSelectionModal} >
                            <FontAwesomeIcon icon={faPencil} />
                        </div>
                    </div>
                </div>
            :
                <Button label="Select Car" handleMe={handleCarSelectionModal} />
            }
            <div className='checkout__services'>
                {_selectedServices?.length > 0 ?
                    (_selectedServices?.map((service, index) => {
                        return (
                            <div className='eachService__cart'>
                                <div className='eSCart_header'>
                                    <div className='eSCart_service'>{service.serviceName}</div>
                                    <FontAwesomeIcon icon={faTimesCircle} onClick={() => handleDelete(index)} />
                                </div>
                                <div className='eSCart_amount'>₹ {service.amount}</div>
                            </div>
                        )
                    }))
                :
                    <div className='no_service' >
                        <div className='noService__text'>Please add service to your cart.</div>
                        <NavLink to="/services" activeClassName="active">
                            <Button label="Go to Services" className="gotoService" />
                        </NavLink>
                    </div>
                }
            </div>
            <div className='chekcout__totolAmount'>
                <div className='checkoutTotolamount__text'>Total</div>
                <div className='checkoutTotalamount__amount'>
                    ₹ {findTotalAmount()}
                </div>
            </div>
        </div>
    )
}

export default memo(CheckoutCart);