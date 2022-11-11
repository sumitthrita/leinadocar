import React, { memo, useState } from "react"
import HomepageEasyBook from "./HomepageEasyBook";
import carImage from '../Images/homecar.png'

const HomePageSectionOne = props => {


  return (
    <div className="homepageSectionOne">
        <HomepageEasyBook />
        <div className="homepageSectionRight">
          <img src={carImage} alt="carImage" />
        </div>
    </div>
  )
}

export default memo(HomePageSectionOne);
