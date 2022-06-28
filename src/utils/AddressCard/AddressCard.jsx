import React from 'react'

import css from './AddressCard.module.css'

import rightArrow from '/icons/right-arrow.png'

const AddressCard = ({title, address}) => {
  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div>
                <div className={css.ttl}>{title}</div>
                <div className={css.address}>{address}</div>
            </div>
            <div className={css.btns}>
                <button className={css.btn1}>Edit <span><img className={css.rightArrow} src={rightArrow} alt="Right Arrow" /></span></button>
                <button className={css.btn2}>Delete</button>
            </div>
        </div>
  </div>
}

export default AddressCard