import React from 'react'
import HomepagesectionTitle from './HomepagesectionTitle'
import imgOne from '../Images/groupofcars.png'
import imgTwo from '../Images/keys.png'
import imgThree from '../Images/livetracking.png'
import imgFour from '../Images/warranty.png'

const HomepageSectionThree = props => {
    const data = [
        {
            id : 1,
            title: "Select Your Car",
            subtitle : "Choose from our portfolio of cars.",
            img : imgOne
        },
        {
            id : 2,
            title: "Free Pick-Up & Drop",
            subtitle : "Once booked, sit back and relax.",
            img : imgTwo
        },
        {
            id : 3,
            title: "Live Tracking",
            subtitle : "Get real time status & updates.",
            img : imgThree
        },
        {
            id : 4,
            title: "30 Days Warranty",
            subtitle : "Stay assured. 1 month warranty on all car services & repairs.",
            img : imgFour
        }
    ]

    return (
        <div className='homepagesectionThree' >
            <HomepagesectionTitle title="Service in 4 easy steps" />
            <div className='hpsth_content'>
                {data.map(e => 
                    <div className='hpsth_ceach'>
                        <div className='hpsth_cimg'>
                            <img src={e.img} alt="image" />
                        </div>
                        <div className='hpsth_ctitle'>{e.title} </div>
                        <div className='hpsth_csubtitle'>{e.subtitle} </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomepageSectionThree;