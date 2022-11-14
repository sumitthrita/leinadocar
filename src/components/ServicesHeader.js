import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setServicesToSelect } from '../Redux/action';

const ServicesHeader = props => {

    const services = ["Periodic Services", "Denting & Paiting", "Batteries", "Car Spa & Cleaning", "AC Service & Repair", "Tyres & Wheel care", "Insurance & Claims", "Custom Services", "Detailing Services", "Windshields & Lights", "Clutch & Fitments"]
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

    const handleServiceType = e => {
        if(e.target.id === "service_headers_click"){
            setSelectedService(e.target.dataset.servicetype)
        }
    }
    
    return (
        <div className='services_header'>
            <div className='servicesHeader_icon' onClick={() => handleSlide("left")} >
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
            <div ref={previousRef} className='servicesHeader_services' onClick={handleServiceType} >
                {services.map((service, index) => {
                    return(
                        <div key={index} id="service_headers_click" data-servicetype={service} className={'servicesHeaderServices_each' + (selectedService === service ? " selected" : "")} >{service}</div>
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