import React from 'react'
import {Link} from 'react-router-dom'

import css from './RecentlyViewedCard.module.css'

const RecentlyViewedCard = ({udata}) => {
  const {imgSrc, id, name, address, ratingsDelivery, ratingsDining,link} =udata;

  return (
    <Link to={link} className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img src={imgSrc} alt={name + "picture"} className={css.img}/>
            </div>
            <div className={css.txt}>
              <div className={css.name}>{name}</div>
              <div className={css.ratings}>
                <div className={css.ratingBox}>
                  <span className={css.rating}>{ratingsDining}</span>
                  <span className={css.ratingTxt}>Dinning</span>
                </div>
                <div className={css.ratingBox}>
                  <span className={css.rating}>{ratingsDelivery}</span>
                  <span className={css.ratingTxt}>Delivery</span>
                </div>
              </div>
              <div className={css.address}>{address}</div>
            </div>
        </div>
    </Link>
  )
}

export default RecentlyViewedCard