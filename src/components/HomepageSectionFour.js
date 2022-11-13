import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react'
import CustomCarousel from './CustomCarousel';
import HomepagesectionTitle from './HomepagesectionTitle';
import cone from '../Images/customerone.png'
import ctwo from '../Images/customertwo.png'

const HomepageSectionFour = props => {
    const count = 3;

    const data = [
        {
            id : 1,
            img : cone,
            name : "Anuj Kumar",
            rating : 5,
            date : "22/11/2022",
            review : "The rear bumber of my car got destroyed completely due to an accident. Thanks to DocCar for replacing it with origin bumber."
        },
        {
            id : 2,
            img : ctwo,
            name : "N. Leina Singha",
            rating : 4,
            date : "03/09/2022",
            review : "The rear bumber of my car got destroyed completely due to an accident. Thanks to DocCar for replacing it with origin bumber."
        },
        {
            id : 3,
            img : cone,
            name : "Sumit Rajput",
            rating : 3,
            date : "26/11/2022",
            review : "The rear bumber of my car got destroyed completely due to an accident. Thanks to DocCar for replacing it with origin bumber."
        },
        {
            id : 4,
            img : ctwo,
            name : "Manju Singh",
            rating : 2,
            date : "26/11/2022",
            review : "The rear bumber of my car got destroyed completely due to an accident. Thanks to DocCar for replacing it with origin bumber."
        },
        {
            id : 5,
            img : cone,
            name : "Rajat Kumar",
            rating : 5,
            date : "26/11/2022",
            review : "The rear bumber of my car got destroyed completely due to an accident. Thanks to DocCar for replacing it with origin bumber."
        },
        {
            id : 6,
            img : ctwo,
            name : "Shubham Rajput",
            rating : 3,
            date : "26/11/2022",
            review : "The rear bumber of my car got destroyed completely due to an accident. Thanks to DocCar for replacing it with origin bumber."
        }
    ]

    const showStar = (n) => {
        let array = []
        for(let i=0; i < n; i++)
            array.push("star")
        
        return array.map(e => 
                <FontAwesomeIcon icon={faStar} />
            )
    }

    return (
        <div className='homepagesectionfour'>
            <HomepagesectionTitle title="Our Customer Reviews" />
            <CustomCarousel data={data} count={count} transformWidth={444} >
                {data.map(e => 
                    <div className='cR_eachContent'>
                        <div className='cR_eC_top'>
                            <div className='cR_eCTop_left'>
                                <div className='cRTopLeft_img'>
                                    <img src={e.img} alt="customerImage" />
                                </div>
                                <div className='cRTopLeft_nameStar'>
                                    <div className='crtl_name'>{e.name} </div>
                                    <div className='crtl_star'>
                                        {showStar(e.rating)}
                                    </div>
                                </div>
                            </div>
                            <div className='cR_eCTop_right'>{e.date} </div>
                        </div>
                        <div className='cR_eC_bottom'>
                            {e.review}
                        </div>
                    </div>
                )}
            </CustomCarousel>
        </div>
    )
}

export default memo(HomepageSectionFour);