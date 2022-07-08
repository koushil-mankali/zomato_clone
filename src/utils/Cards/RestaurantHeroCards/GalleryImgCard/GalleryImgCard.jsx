import React from 'react'

import css from './GalleryImgCard.module.css'

const GalleryImgCard = ({imgSrc}) => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <img src={imgSrc} className={css.img} />
    </div>
  </div>
}

export default GalleryImgCard