import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import Button from './Button'
import { isServiceAdded } from './helpingFunctions'

const ServiceType = props => {

    return(
        <div className='serviceType_container'>
            <div className='sT_title'>{props.title} </div>
            <div className='sT_sericeCardContainer'>
                {props.services.map((service, index) => {
                    return (
                        <div key={index} className={'eachServiceCard' + " " + (props.className)}>
                            <div className='eSC_top'>
                                <div className='eSCTop__left'>
                                    <img src={service.img} alt="serice_image" />
                                </div>
                                <div className='eSCTop__right'>
                                    <div className='eSCTopRight_title'>
                                        {service.serviceName}
                                    </div>
                                    <div className='eSCTopRight_otherInfo'>
                                        {service.otherInfo?.length > 0 && service.otherInfo?.map((e, i) => {
                                            return (
                                                <div key={i} className='eSCTROtherInfo_each'>
                                                    <div className='eSCTROtherInfo_each_circle'>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </div>
                                                    <div className='eSCTROtherInfo_each_text'>{e}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='eSC_bottom'>
                                <div className='eSCB_amount'>
                                    ₹ {service.amount}
                                </div>
                                {isServiceAdded(service.id) ? 
                                    <div className='serviceAdded_text'>Added To Cart</div>
                                :
                                    <Button className="add_to_cart" label="Add To Cart" handleMe={() => props.handleSelect(service)} />
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(ServiceType);