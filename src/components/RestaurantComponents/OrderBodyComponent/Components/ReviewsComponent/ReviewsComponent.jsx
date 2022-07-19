import React from 'react'

import css from './ReviewsComponent.module.css'

import RateYourExperienceCard from '../../../../../utils/Cards/RestaurantBodyCards/RateYourExperienceCard/RateYourExperienceCard'

const ReviewsComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.left}></div>
      <div className={css.right}>
        <RateYourExperienceCard />
      </div>
    </div>
  </div>
}

export default ReviewsComponent