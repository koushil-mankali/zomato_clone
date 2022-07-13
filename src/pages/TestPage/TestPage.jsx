import React from 'react'

import {Formik, Form} from 'formik'

import CheckBoxUtil from '../../utils/FormUtils/CheckBoxUtil/CheckBoxUtil'

import OverviewAboutCard from '../../utils/Cards/RestaurantBodyCards/OverviewAboutCard/OverviewAboutCard'
import SmallSearchBarUtil from '../../utils/RestaurantUtils/SmallSearchBarUtil/SmallSearchBarUtil'
import RateYourExperienceCard from '../../utils/Cards/RestaurantBodyCards/RateYourExperienceCard/RateYourExperienceCard'
import RedBtnHovWithIcon from '../../utils/Buttons/RedBtnHovWithIcon/RedBtnHovWithIcon'

import DropdownUtil from '../../utils/RestaurantUtils/DropdownUtil/DropdownUtil'

import RestUserReviewedCard from '../../utils/RestaurantUtils/RestUserReviewedCard/RestUserReviewedCard'
import OfferTrackUtil from '../../utils/RestaurantUtils/OfferTrackUtil/OfferTrackUtil'
import LabelUtil from '../../utils/RestaurantUtils/LabelUtil/LabelUtil'

import profilepic from '/images/profilepic.jpg'

import dropdownIcon from '/icons/down-arrow1.png';
import menu from '/icons/menu.png';
import star from '/icons/star.png'

import GoTopArrow from '../../utils/GoTopArrow/GoTopArrow'

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
      stars: 3,
      days: 10,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: profilepic,
      userId: 11,
  };

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

  return <div>
    <div>TestPage</div>
    <div style={{display: "flex"}}>
      <LabelUtil link='/' txt="North Indian" />
      <LabelUtil link='/' txt="South Indian" />
      <LabelUtil link='/' txt="East Indian" />
      <LabelUtil link='/' txt="West Indian" />
      <LabelUtil link='/' txt="Desserts" />
    </div>
    <Formik initialValues={{veg: ""}}>
      <Form>
        <CheckBoxUtil label="veg Only" name="veg" />
      </Form>
    </Formik>
    <OfferTrackUtil txt1='40% OFF up to ₹80 + 10% OFF up to ₹75 Paytm Cashback' txt2="use code PAYTMBASH" />
    <RestUserReviewedCard data={data2} />
    <DropdownUtil options={options1} icon2={dropdownIcon} filFunc={(val) => console.log(val)} />
    <DropdownUtil options={options2} icon1={menu} icon2={dropdownIcon}  filFunc={(val) => console.log(val)} />
    <RedBtnHovWithIcon txt="Add Review" icon={star} />
    <RateYourExperienceCard />
    <OverviewAboutCard data={data} />
    <SmallSearchBarUtil placeholder="Search within menu" />
    <GoTopArrow />
  </div>
}

export default TestPage