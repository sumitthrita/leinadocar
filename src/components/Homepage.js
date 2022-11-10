import React, { memo } from "react"
import HomepageSectionOne from "./HomepageSectionOne";

const HomePage = props => {
  return (
    <div className="homepage">
      <HomepageSectionOne />
    </div>
  )
}

export default memo(HomePage);
