import { faPencil, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCard } from '../Redux/action';
import Button from './Button';
import { findTotalAmount } from './helpingFunctions';

const CheckoutCart = props => {
    console.log("working");

    const [changeVehicle, setChangeVehicle] = useState(false)

    const {selectedVehicle, selectedServices} = useSelector((store) => ({
        selectedVehicle : store.checkoutReducer._selectedVehicle,
        selectedServices : JSON.parse(store.checkoutReducer._services)
    }))

    const dispatch = useDispatch()

    const handleDelete = (index) => {
        let allServices = [...selectedServices]
        allServices.splice(index, 1)
        dispatch(addToCard(allServices))
    }

    return (
        <div className='checkout_cart'>
            <div className='checkoutCart__vehicle'>
                {changeVehicle ?
                    <div>input box</div>
                :
                    <div className='checkoutCart_vehicleInfo'>
                        <div className='vehicleName'>{selectedVehicle.name} <span className='vehicleType' >{selectedVehicle.type} </span> </div>
                        <div className='changeIcon'>
                            <FontAwesomeIcon icon={faPencil} />
                        </div>
                    </div>
                }
            </div>
            <div className='checkout__services'>
                {selectedServices?.length > 0 ?
                    (selectedServices?.map((service, index) => {
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