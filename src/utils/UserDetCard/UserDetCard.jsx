import React from 'react'
import css from './UserDetCard.module.css'

const UserDetCard = ({imgSrc, name}) => {
  return (
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img src={imgSrc} alt={name + "picture"} className={css.img}/>
            </div>
            <div className={css.txt}>{name}</div>
        </div>
    </div>
  )
}

export default UserDetCard