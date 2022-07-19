import React from 'react'

import css from './ReviewsComponent.module.css'

import RateYourExperienceCard from '../../../../../utils/Cards/RestaurantBodyCards/RateYourExperienceCard/RateYourExperienceCard'
import RestUserReviewedCard from '../../../../../utils/RestaurantUtils/RestUserReviewedCard/RestUserReviewedCard'
import DropdownUtil from '../../../../../utils/RestaurantUtils/DropdownUtil/DropdownUtil'

import profilepic from '/images/profilepic.jpg'
import dropdownIcon from '/icons/down-arrow1.png';
import menu from '/icons/menu.png';

const ReviewsComponent = () => {

  let data = [
      {
        imgSrc: profilepic,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        reviews: 0,
        followers: 0,
        stars: 3,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: profilepic,
        userId: 11,
    },
    {
      imgSrc: profilepic,
      title: "Paradise Biryani",
      address: "Kukatpally, Hyd",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 10,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: profilepic,
      userId: 11,
    }
  ];

const options1 = [
  "All Reviews",
  "Following",
  "Popular",
  "Bloggers",
  "My Reviews",
  "Order Reviews"
]

const options2 = [
  "Newest First",
  "Oldest First",
  "Highest Rated",
  "Lowest Rated"
]

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.left}>
        <div className={css.dropDowns}>
          <DropdownUtil options={options1} icon2={dropdownIcon} filFunc={(val) => console.log(val)} />
          <DropdownUtil options={options2} icon1={menu} icon2={dropdownIcon}  filFunc={(val) => console.log(val)} />
        </div>
        <div className={css.re}>
          {data?.map((item, id) => {
            return <RestUserReviewedCard ket={id} data={item} />
          })}
        </div>
      </div>
      <div className={css.right}>
        <RateYourExperienceCard />
      </div>
    </div>
  </div>
}

export default ReviewsComponent