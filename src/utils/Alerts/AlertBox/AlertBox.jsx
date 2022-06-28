import React from 'react'

import css from './AlertBox.module.css'

import crossIcon from '/icons/close.png'

const AlertBox = ({text, color = "green", setClose, stateVal}) => {
  return (
    <div className={[css.outerDiv, css[color]]?.join(" ")}>
        <div className={css.innerDiv}>
            <div className={css.txt}>{text}</div>
            <div className={css.imgBox} onClick={() => setClose(val => {return {...val, [stateVal]: !val[stateVal] }})}><img src={crossIcon} className={css.img} /></div>
        </div>
    </div>
  )
}

export default AlertBox