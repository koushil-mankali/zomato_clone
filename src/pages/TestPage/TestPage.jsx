import React from 'react'

import OverviewAboutCard from '../../utils/Cards/RestaurantBodyCards/OverviewAboutCard/OverviewAboutCard'
import SmallSearchBarUtil from '../../utils/RestaurantUtils/SmallSearchBarUtil/SmallSearchBarUtil'

const TestPage = () => {
    const data = {
        phone: "9988098812",
        address: "50000, kukatpally, Hyderabad, Telangane, India",
        lat: 11.11,
        lng: 18.31
    }
  return <div>
    <div>TestPage</div>
    <OverviewAboutCard data={data} />
    <SmallSearchBarUtil placeholder="Search within menu" />
  </div>
}

export default TestPage