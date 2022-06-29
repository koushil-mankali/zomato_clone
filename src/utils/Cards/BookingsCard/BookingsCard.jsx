import React from 'react'

import css from './BookingsCard.module.css'

const BookingsCard = ({title, address}) => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.header}>
            <div className={css.ttl}>{title}</div>
        </div>
        <div className={css.bdy}>
            <div className={css.address}>
                {address}
            </div>
        </div>
        <div className={css.footer}>
            <div></div>
            <button className={css.btn}>View Booking</button>
        </div>
    </div>
  </div>
}

export default BookingsCard