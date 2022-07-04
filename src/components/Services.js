import React, { memo, useCallback } from 'react'
import ServicesHeader from './ServicesHeader';
import ServiceType from './ServiceType';
import sPBasic from '../Images/sPBasic.png'
import sPStandard from '../Images/sPStandard.png'
import sPComprehensive from '../Images/sPComprehensive.png'
import RadiatorReplace from '../Images/radiatorReplace.png'
import RadiatorFlushClean from '../Images/radiatorFlushClean.png'
import FrontBrakeDisc from '../Images/frontBrakeDisk.png'
import DrumBrakeTuning from '../Images/drumBrakeTuning.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../Redux/action';
import SelectedServicesCart from './SelectedServicesCart';

const Services = props => {

    const {selectedVehicle, selectedServices} = useSelector((store) => ({
        selectedVehicle : store.checkoutReducer._selectedVehicle,
        selectedServices : JSON.parse(store.checkoutReducer._services)
    }))

    const dispatch = useDispatch()

    const ScheduledPackages = [
        {
            serviceName : "Basic Service",
            id: "1",
            amount : "11744",
            otherInfo : ["Every 5000 Kms/ 3 Months", "Takes 4 Hours", "1 Month Warrenty", "Includes 9 services"],
            img : sPBasic
        },
        {
            id: "2",
            serviceName : "Standard Service",
            amount : "4199",
            otherInfo : ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement", "Tyre Polish"],
            img : sPStandard
        },
        {
            id: "3",
            serviceName : "Comprehensive Service",
            amount : "5999",
            otherInfo : ["Oil Filter Replacement", "Air Filter Replacement", "Spark Plugs Clean", "Brake Pads Clean"],
            img : sPComprehensive
        }
    ]

    const PeriodicServices = [
        {
            id: "4",
            serviceName : "Radiator Replacement",
            amount : "3760",
            otherInfo : ["Radiator Replacement", "Radiator Cleaning", "Coolant leakage Inspection", "Radiator Hoses, Thermostat Values"],
            img : RadiatorReplace
        },
        {
            id: "5",
            serviceName : "Radiator Flush Clean",
            amount : "1299",
            otherInfo : ["Coolant Draining", "Radiator Flushing", "Anti-Freeze Coolant", "Radiator Cleaning"],
            img : RadiatorFlushClean
        },
        {
            id: "6",
            serviceName : "Front Brake Disc",
            amount : "1299",
            otherInfo : ["Front Brake Disc", "Front Brake Displacement", "Opening & fitting of Front Brake Disc", "Reduce Vibrations & Brake Noises"],
            img : FrontBrakeDisc
        },
        {
            id: "7",
            serviceName : "Drum Brake Tuning",
            amount : "1599",
            otherInfo : ["Brake Drums Tuning", "Opening & fitting of Front Brake Disc", "Refacing of broken Drums"],
            img : DrumBrakeTuning
        }
    ]

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
                    {ScheduledPackages?.length > 0 && 
                        <ServiceType
                            services = {ScheduledPackages}
                            title = "Scheduled Packages"
                            handleSelect={(service) => handleAddToCard(service)}
                            className={selectedServices?.length > 0 ? "moreWidth" : ""}
                        />
                    }
                    {PeriodicServices?.length > 0 &&
                        <ServiceType
                            services = {PeriodicServices}
                            title = "Periodic Maintenance Additional jobs"
                            handleSelect={(service) => handleAddToCard(service)}
                            className={selectedServices?.length > 0 ? "moreWidth" : ""}
                        />
                    }   
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