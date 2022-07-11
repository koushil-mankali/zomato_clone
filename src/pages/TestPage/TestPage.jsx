import React from 'react'

import OverviewAboutCard from '../../utils/Cards/RestaurantBodyCards/OverviewAboutCard/OverviewAboutCard'
import SmallSearchBarUtil from '../../utils/RestaurantUtils/SmallSearchBarUtil/SmallSearchBarUtil'
import RateYourExperienceCard from '../../utils/Cards/RestaurantBodyCards/RateYourExperienceCard/RateYourExperienceCard'
import RedBtnHovWithIcon from '../../utils/Buttons/RedBtnHovWithIcon/RedBtnHovWithIcon'

import RestUserReviewedCard from '../../utils/RestaurantUtils/RestUserReviewedCard/RestUserReviewedCard'

import profilepic from '/images/profilepic.jpg'

import star from '/icons/star.png'

const TestPage = () => {
    const data = {
        phone: "9988098812",
        address: "50000, kukatpally, Hyderabad, Telangane, India",
        lat: 11.11,
        lng: 18.31
    }

    let data2 = {
      imgSrc: profilepic,
      title: "Paradise Biryani",
      address: "Kukatpally, Hyd",
      reviews: 0,
      followers: 0,
      stars: 5,
      days: 10,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: profilepic,
      userId: 11,
  };
  return <div>
    <div>TestPage</div>
    <RestUserReviewedCard data={data2} />
    <RedBtnHovWithIcon txt="Add Review" icon={star} />
    <RateYourExperienceCard />
    <OverviewAboutCard data={data} />
    <SmallSearchBarUtil placeholder="Search within menu" />
  </div>
}

export default TestPage