import React from 'react'

import css from './RatingNumberBox.module.css'

import starIcon from '/icons/star.png';

const RatingNumberBox = (props) => {
  const {stars = 1, txt = 1, iconR = false, isActive = true, ...restProps} = props;

  const bgCss = () => {
    if(+stars <= 1 & +txt <= +stars){
      return [css.rating, css.acRatingR].join(" ")
    } else if (+stars <= 2 & +txt <= +stars){
      return [css.rating, css.acRatingR2].join(" ")
    } else if (+stars <= 3 & +txt <= +stars){
      return [css.rating, css.acRatingYG].join(" ")
    } else if (+stars <= 4 & +txt <= +stars){
      return [css.rating, css.acRatingG].join(" ")
    } else if(+stars <= 5 & +txt <= +stars){
      return [css.rating, css.acRatingDG].join(" ")
    } else {
      return [css.rating];
    }
  }
  
  return <div className={bgCss()} {...restProps}>
    <div className={isActive ? [css.rtgTxt, css.acRtgTxt].join(" ") : css.rtgTxt}>
        {!iconR ? txt : ""}
    </div>
    <div className={css.imgBox}>
        {!iconR ? <img src={starIcon} className={isActive ? [css.icon, css.acIcon].join(" ") : css.icon} /> : "" }
    </div>
  </div>
}

export default RatingNumberBox