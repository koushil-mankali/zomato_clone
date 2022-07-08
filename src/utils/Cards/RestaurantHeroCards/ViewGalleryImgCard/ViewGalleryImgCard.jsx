import React from 'react'

import css from './ViewGalleryImgCard.module.css'

const ViewGalleryImgCard = ({imgSrc}) => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <img src={imgSrc} className={css.img} />
    </div>
    <div className={css.txt}>
      View Gallery
    </div>
  </div>
}

export default ViewGalleryImgCard