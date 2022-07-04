import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { findTotalAmount } from './helpingFunctions'

const SelectedServicesCart = props => {

    return (
        <div className={'selectedServicesCart_container' + (props.selectedServices.length > 0 ? " moreWidth" : "")}>
            <div className='selectedServicesCart_title'>
                Selected Services
            </div>
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
            <div className='selectedServices_totalAmount'><span>Total: </span> ₹ {findTotalAmount()} </div>
            <NavLink to="/checkout" activeClassName="active">
                <Button label="Checkout" className="gotoService" />
            </NavLink>
        </div>
    )
}

export default memo(SelectedServicesCart)