import React, { memo, useCallback } from 'react'
import ServicesHeader from './ServicesHeader';
import ServiceType from './ServiceType';
import RadiatorReplace from '../Images/radiatorReplace.png'
import RadiatorFlushClean from '../Images/radiatorFlushClean.png'
import FrontBrakeDisc from '../Images/frontBrakeDisk.png'
import DrumBrakeTuning from '../Images/drumBrakeTuning.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../Redux/action';
import SelectedServicesCart from './SelectedServicesCart';

const Services = props => {

    const {selectedVehicle, selectedServices, servicesToSelect } = useSelector((store) => ({
        selectedVehicle : store.checkoutReducer._selectedVehicle,
        selectedServices : JSON.parse(store.checkoutReducer._services),
        servicesToSelect : store.checkoutReducer._servicesToSelect
    }))

    const dispatch = useDispatch()

    const handleAddToCard = useCallback((service) => {
        let currentServices = [...selectedServices]
        currentServices.push(service)
        dispatch(addToCard(currentServices))
    },[selectedServices])

    const handleDelete = useCallback((index) => {
        let allServices = [...selectedServices]
        allServices.splice(index, 1)
        dispatch(addToCard(allServices))
    },[selectedServices])

    
    return(
        <div className='services_container'>
            <ServicesHeader />
            <div className='servicesContainer_body'>
                <div className={'servicesContainer_left' + (selectedServices?.length > 0 ? " lessWidth" : "")}>
                    {servicesToSelect?.map((e, index) => 
                        <ServiceType
                            id={index}
                            services = {e.serviceData}
                            title = {e.title}
                            handleSelect={(service) => handleAddToCard(service)}
                            className={selectedServices?.length > 0 ? "moreWidth" : ""}
                        />
                    )}
                </div>
                <SelectedServicesCart
                    selectedServices={selectedServices}
                    handleDelete={(index) => handleDelete(index)}
                />
            </div>
        </div>
    )
}

export default memo(Services);