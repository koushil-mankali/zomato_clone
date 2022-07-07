import React from 'react'

import css from './OrderTitleComponent.module.css'

const OrderTitleComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.left}>
            <div className={css.title}></div>
            <div className={css.specials}></div>
            <div className={css.address}></div>
            <div className={css.timings}>
                <span className={css.opORclo}></span>
                <span className={css.time}></span>
                <span className={css.infoIconBox}>
                    <img className={css.infoIcon} />
                    <div className={css.infoTooltip}>
                        <div className={css.ttil}>Opening Hours</div>
                        <div className={css.ttim}>Mon-Sun:<span className={css.ctim}>11:30am-10:30pm</span></div>
                    </div>
                </span>
            </div>
        </div>
        <div className={css.right}>

        </div>
    </div>
  </div>
}

export default OrderTitleComponent