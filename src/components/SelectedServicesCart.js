import { faPencil, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showGeneralModalAction } from '../Redux/action'
import Button from './Button'
import CarSelectionModal from './CarSelectionModal'
import { findTotalAmount } from './helpingFunctions'

const SelectedServicesCart = props => {

    const { _selectedVehicle } = useSelector(store => ({
        _selectedVehicle: store.checkoutReducer._selectedVehicle
    }))

    const dispatch = useDispatch()

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
        <div className={'selectedServicesCart_container' + (props.selectedServices.length > 0 ? " moreWidth" : "")}>
            {_selectedVehicle.engineType !== "" ?
                <div className='selectedServicesCart_carDetails'>
                    <div className='sSCCar_left'>
                        <div className='sSCCar_name'>
                            {_selectedVehicle.company} {_selectedVehicle.carModal}
                        </div>
                        <div className='sSCCar_type'>{_selectedVehicle.engineType} </div>
                    </div>
                    <div className='sSCCar_right pointer' onClick={handleCarSelectionModal} >
                        <FontAwesomeIcon icon={faPencil} />
                    </div>
                </div>
            :
                <Button label="Select Car" handleMe={handleCarSelectionModal} />
            }
            <div className='selectedServices_card'>
                {props.selectedServices.map((service, index) => {
                    return(
                        <div className='selectedService_card'>
                            <div className='selectedService_card_left'>
                                <div className='selectedService_title'>{service.serviceName} </div>
                                <div className='selectedService_amount'>₹ {service.amount} </div>
                            </div>
                            <div className='selectedService_card_right'>
                                <FontAwesomeIcon icon={faTimesCircle} onClick={() => props.handleDelete(index)} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='horizontal_seperator' />
            <div className='selectedServices_totalAmount'>
                <div className='sS_tA_title'>Total</div>
                <div className='sS_tA_amount'> ₹ {findTotalAmount()} </div>
            </div>
            {_selectedVehicle.engineType !== "" && 
                <NavLink to="/checkout" activeClassName="active" className="sS_checkout" >
                    <Button label="Checkout" className="gotoService" />
                </NavLink>
            }
        </div>
    )
}

export default memo(SelectedServicesCart)