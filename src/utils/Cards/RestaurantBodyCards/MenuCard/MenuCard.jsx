import React from 'react'

import css from './MenuCard.module.css'

const MenuCard = ({imgSrc, ttl, pages}) => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
    <div className={css.cardsStlye}>
        <div className={css.cardDiv1}></div>
        <div className={css.cardDiv2}></div>
    </div>
        <div className={css.imgBox}>
            <img src={imgSrc} alt='menu card' className={css.img} />
        </div>
        <div className={css.txtH}>
            <div className={css.ttl}>{ttl}</div>
            <div className={css.page}>{pages} Pages</div>
        </div>
    </div>
  </div>
}

export default MenuCard