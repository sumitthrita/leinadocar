import React from 'react'
import CustomCarousel from './CustomCarousel';
import HomepagesectionTitle from './HomepagesectionTitle';
import diagnostics from '../Images/diagnostics.png'
import dentpaint from '../Images/dentpaint.png'
import oil from '../Images/oil.png'
import brakes from '../Images/brakes.png'

const HomepageSectionTwo = props => {
    const count = 2

    const data = [
        {
            id:1,
            title: "Diagnostics",
            img: diagnostics
        },
        {
            id:2,
            title: "Dent & Paint",
            img: dentpaint
        },
        {
            id:3,
            title: "Oil/Lube/Filters",
            img: oil
        },
        {
            id:4,
            title: "Brakes",
            img: brakes
        },
        {
            id:5,
            title: "Lubes",
            img: oil
        },
        {
            id:6,
            title: "Filter",
            img: oil
        }
    ]

    return (
        <div className='homepagesectionTwo'>
            <HomepagesectionTitle title="Car services we provide" />
            <CustomCarousel data={data} count={count} transformWidth={336} >
                {data.map(e => 
                    <div className='cC_eachContent' key={e.id}>
                        <div className='cc_eachImage' >
                            <img src={e.img} alt="image" />
                        </div>
                        <div className='cC_eachTitle'>{e.title} </div>
                    </div>
                )}
            </CustomCarousel>
        </div>
    )
}

export default HomepageSectionTwo;