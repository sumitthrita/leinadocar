import React from 'react'

const HomepagesectionTitle = props => {

    return(
        <div className="homepagesectiontitle">
            <div className="hpst_title">
                {props.title}
            </div>
            <div className="hpst_hor_bar"></div>
        </div>
    )
}

export default HomepagesectionTitle;