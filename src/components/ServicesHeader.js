import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setServicesToSelect } from '../Redux/action';

const ServicesHeader = props => {

    const services = ["Periodic Services", "Denting & Paiting", "Batteries", "Car Spa & Cleaning", "AC Service & Repair", "Tyres & Wheel care", "Insurance & Claims", "Custom Serives", "Detailing Services", "Windshields & Lights", "Clutch & Fitments"]
    const [selectedService, setSelectedService] = useState("Periodic Services")
    const previousRef = useRef()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setServicesToSelect(selectedService))
    },[selectedService])

    const handleSlide = type => {
        if(type === "left"){
            previousRef.current.scrollTo({ left: previousRef.current.scrollLeft - 200, behavior: 'smooth' });
        } else if (type === "right"){
            previousRef.current.scrollTo({ left: previousRef.current.scrollLeft + 200, behavior: 'smooth' });
        }
    }

    const handleServiceType = type => {
        setSelectedService(type)
    }
    
    return (
        <div className='services_header'>
            <div className='servicesHeader_icon' onClick={() => handleSlide("left")} >
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
            <div ref={previousRef} className='servicesHeader_services'>
                {services.map((service, index) => {
                    return(
                        <div key={index} className={'servicesHeaderServices_each' + (selectedService === service ? " selected" : "")} onClick={() => handleServiceType(service)} >{service}</div>
                    )
                })}
            </div>
            <div className='servicesHeader_icon' onClick={() => handleSlide("right")} >
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    )
}

export default memo(ServicesHeader);