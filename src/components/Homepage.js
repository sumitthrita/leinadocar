import React, { memo } from "react"
import HomepageFooter from "./HomepageFooter";
import HomepageSectionFour from "./HomepageSectionFour";
import HomepageSectionOne from "./HomepageSectionOne";
import HomepageSectionThree from "./HomepageSectionThree";
import HomepageSectionTwo from "./HomepageSectionTwo";

const HomePage = props => {
  return (
    <div className="homepage">
      <HomepageSectionOne />
      <HomepageSectionTwo />
      <HomepageSectionThree />
      <HomepageSectionFour />
      <HomepageFooter />
    </div>
  )
}

export default memo(HomePage);
