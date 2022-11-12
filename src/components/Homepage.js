import React, { memo } from "react"
import HomepageSectionOne from "./HomepageSectionOne";
import HomepageSectionThree from "./HomepageSectionThree";
import HomepageSectionTwo from "./HomepageSectionTwo";

const HomePage = props => {
  return (
    <div className="homepage">
      <HomepageSectionOne />
      <HomepageSectionTwo />
      <HomepageSectionThree />
    </div>
  )
}

export default memo(HomePage);
