import React from 'react'
import Slider from "react-slick";

import css from './test.module.css'

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

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
import MenuCard from '../../utils/Cards/RestaurantBodyCards/MenuCard/MenuCard'
import FoodItemProduct from '../../utils/RestaurantUtils/FoodItemProduct/FoodItemProduct'

import CarouselUtil from '../../utils/CarouselUtil/CarouselUtil'

import profilepic from '/images/profilepic.jpg'
import food1 from '/images/food1.jpg'
import hariyalikebab from '/images/hariyalikebab.jpg'

import dropdownIcon from '/icons/down-arrow1.png';
import menu from '/icons/menu.png';
import star from '/icons/star.png'
import vegIcon from '/icons/veg.png'

import GoTopArrow from '../../utils/GoTopArrow/GoTopArrow'

const TestPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
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
    <div className={css.outerDiv}>

      <CarouselUtil />
    </div>
    <div style={{display: "flex"}}>
      <LabelUtil link='/' txt="North Indian" />
      <LabelUtil link='/' txt="South Indian" />
      <LabelUtil link='/' txt="East Indian" />
      <LabelUtil link='/' txt="West Indian" />
      <LabelUtil link='/' txt="Desserts" />
    </div>
    {/* <div style={{}}>
      <FoodItemProduct mustTry={true} ttl="Hariyali Kebab" votes="12" price="1400" desc="Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]" vegNonveg={vegIcon} />
      <FoodItemProduct imgSrc={hariyalikebab} ttl="Hariyali Kebab" votes="12" price="1400" desc="Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]" vegNonveg={vegIcon} />
    </div> */}
    <div style={{display: "flex"}}>
      <MenuCard ttl="Food Menu" imgSrc={food1} pages="23" />
      <MenuCard ttl="Food Menu" imgSrc={food1} pages="23" />
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