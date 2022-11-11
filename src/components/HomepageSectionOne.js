import React, { memo, useState } from "react"
import HomepageEasyBook from "./HomepageEasyBook";

const HomePageSectionOne = props => {


  return (
    <div className="homepageSectionOne">
        <HomepageEasyBook />
        right section
    </div>
  )
}

export default memo(HomePageSectionOne);
