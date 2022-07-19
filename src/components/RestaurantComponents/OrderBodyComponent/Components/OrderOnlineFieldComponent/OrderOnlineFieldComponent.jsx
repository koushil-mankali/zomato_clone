import {useEffect, useState} from 'react'
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

  const [isActive, setIsActive] = useState({
    recommended: true
  });
  const [foodType, setFoodType] = useState({
    veg: false, 
    egg: false
  });

  const offerTrackData = [
    {txt1: "0% OFF up to ₹80 + 10% OFF up to ₹75 Paytm Cashback", txt2: "use code PAYTMBASH"},
    {txt1: "Flat ₹125 OFF", txt2: "use code ICICINB"}
  ]

  const initialValues = {veg: false, egg: false}

  const foodItemsData = {
    recommended: [
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    biryanis: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "egg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "egg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "egg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    indian: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    tandoori: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "egg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    chinese: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    "Noodles & Fried Rice": [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    soups: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "egg"}
    ],
    roti: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    dessert: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:hariyalikebab, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, ttl:"Hariyali Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
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

  const sideNavHandler = (val) => {
    setIsActive({[val?.[0]] : true});
    document.getElementById(`${val?.[0]}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const allTtls = document.querySelectorAll('[data-id=secTtl]');
    const options = {
      threshold: 0.1
    }

    const handleIntersection = (entries) => {
      entries?.map(entry => {
          if(entry.isIntersecting){
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.add(css.activeNavTab);
          }else{
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.remove(css.activeNavTab);
          }
        })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    allTtls.forEach(post => observer.observe(post))
  }, [])

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
        {Object.entries(foodItemsData)?.map((val, id) => {
          return <div data-sb-id={val?.[0]} key={id} onClick={() => sideNavHandler(val)} className={isActive[val?.[0]] ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}>{val?.[0]} ({val?.[1]?.length})</div>
        })}
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
              <Form className={css.form}>
                    <CheckBoxUtil label="Veg Only" name="veg" onChange={() => setFoodType(val => val?.veg ? {veg: false, egg: false} : {veg: true, egg: false})} checked={foodType?.veg || foodType?.egg} />
                    {foodType?.veg || foodType?.egg ? <CheckBoxUtil label="contains egg" name="egg" onChange={() => setFoodType(val => val?.egg ? {veg: true, egg: false} : {veg: true, egg: true})} checked={foodType?.egg} /> : ""}
               </Form>
          </Formik>
        </div>
        <div className={css.itemsBox} id='itemsBox'>
          {Object.entries(foodItemsData)?.map((val, index) => {
            return <div key={index} >
              <div className={css.sec} >
                <div className={css.secTtl}>{val[0]}</div>
                {foodType.egg ? 
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "egg"){
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl" id={val[0]}  />
                    }
                  })
                : 
                foodType.veg ?
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "veg"){
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl"  id={val[0]} />
                    }
                  })
                : 
                  val[1]?.map((item, id) => {
                    return <FoodItemProduct  key={id} data={item} dataset="secTtl" id={val[0]}  />
                  })
                }
                {/* {val[1]?.map((item, id) => {
                  return <FoodItemProduct key={id} {...item}  />
                })} */}
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