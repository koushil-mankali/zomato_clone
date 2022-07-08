import React from 'react'

import css from './OrderTitleComponent.module.css'

import RatingUtil from '../../../utils/RestaurantUtils/RatingUtil/RatingUtil'

import infoIcon from '/icons/info.png'

const OrderTitleComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.left}>
            <div className={css.title}>Krupa Mess & Tiffins</div>
            <div className={css.specials}>South Indian, Chinese, North Indian, Sichuan, Pizza</div>
            <div className={css.address}>Abids, Hyderabad</div>
            <div className={css.timings}>
                <span className={css.opORclo}>Open now -</span>
                <span className={css.time}>10am - 11pm (Today)</span>
                <span className={css.infoIconBox}>
                    <img className={css.infoIcon} src={infoIcon} />
                    <div className={css.infoTooltip}>   
                        <div className={css.ttil}>Opening Hours</div>
                        <div className={css.ttim}>Mon-Sun:<span className={css.ctim}>11:30am-10:30pm</span></div>
                    </div>
                </span>
            </div>
        </div>
        <div className={css.right}>
            <RatingUtil rating="4.1" count="601" txt="Dining Reviews" />
            <RatingUtil rating="3.6" count="37.3k" txt="Delivery Reviews" />
        </div>
    </div>
  </div>
}

export default OrderTitleComponent