import React, { memo } from "react"
import HomepageSectionOne from "./HomepageSectionOne";
import HomepageSectionTwo from "./HomepageSectionTwo";

const HomePage = props => {
  return (
    <div className="homepage">
      <HomepageSectionOne />
      <HomepageSectionTwo />
    </div>
  )
}

export default memo(HomePage);
