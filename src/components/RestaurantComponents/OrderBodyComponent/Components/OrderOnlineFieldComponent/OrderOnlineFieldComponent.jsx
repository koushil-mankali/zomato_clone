import React from 'react'
import {Formik, Form} from 'formik'

import css from './OrderOnlineFieldComponent.module.css'

import CheckBoxUtil from '../../../../../utils/FormUtils/CheckBoxUtil/CheckBoxUtil'


import DownloadAppUtil from '../../../../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'
import SmallSearchBarUtil from '../../../../../utils/RestaurantUtils/SmallSearchBarUtil/SmallSearchBarUtil'
import OfferTrackUtil from '../../../../../utils/RestaurantUtils/OfferTrackUtil/OfferTrackUtil'
import FoodItemProduct from '../../../../../utils/RestaurantUtils/FoodItemProduct/FoodItemProduct'

import compassIcon from '/icons/compass.png'
import clockIcon from '/icons/clock.png'
import vegIcon from '/icons/veg.png'

import hariyalikebab from '/images/hariyalikebab.jpg'

const OrderOnlineFieldComponent = () => {

  const offerTrackData = [
    {txt1: "0% OFF up to ₹80 + 10% OFF up to ₹75 Paytm Cashback", txt2: "use code PAYTMBASH"},
    {txt1: "Flat ₹125 OFF", txt2: "use code ICICINB"}
  ]

  const initialValues = {veg: false, egg: false}

  const foodItemsData = {
    recommended: [
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    biryanis: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    indian: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    tandoori: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    chinese: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    "Noodles & Fried Rice": [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    soups: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    roti: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
    dessert: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon}
    ],
  }

  let breakDiv = <hr className={css.hr2} />
  const foodItemsDataLength = Object.keys(foodItemsData).length

  const breakDivFunc = (index) => {
    if(+foodItemsDataLength- 1 > +index){
      return breakDiv;
    }
    breakDiv = ""
    return breakDiv;
  }

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
      </div>
      <div className={css.rightBox}>
        <div className={css.hSec}>
            <div className={css.ttl}>Order Online</div>
            <SmallSearchBarUtil placeholder="Search within menu" />
        </div>
        <div className={css.tabBox}>
          <div className={css.tagLine}>
            <img src={compassIcon} className={css.clockIcon} alt="live track" />
            <span className={css.tabTxt}>Live track your order</span>
          </div>
          <div className={css.hr} />
          <div className={css.tagLine}>
            <img src={clockIcon} className={css.clockIcon} alt="time" />
            <span className={css.tabTxt}>30 min</span>
          </div>
        </div>
        <div className={css.offersTrack}>
          {offerTrackData?.map((val, id) => {
            return <OfferTrackUtil key={id} txt1={val.txt1} txt2={val.txt2} />
          })}
        </div>
        <div className={css.formBox}>
          <Formik initialValues={initialValues}>
              {formik => {
                return <Form className={css.form}>
                    <CheckBoxUtil label="Veg Only" name="veg" />
                    {formik.values.veg ? <CheckBoxUtil label="contains egg" name="egg" /> : ""}
                </Form>
              }}
          </Formik>
        </div>
        <div className={css.itemsBox}>
          {Object.entries(foodItemsData)?.map((val, index) => {
            return <div key={index}>
              <div className={css.sec}>
                <div className={css.secTtl}>{val[0]}</div>
                {val[1]?.map((item, id) => {
                  return <FoodItemProduct key={id} {...item}  />
                })}
              </div>
              {breakDivFunc(index)}
            </div>
          })}
        </div>
      </div>
    </div>
    <DownloadAppUtil />
  </div>
}

export default OrderOnlineFieldComponent