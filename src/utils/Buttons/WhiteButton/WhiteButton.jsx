import React from 'react'

import css from './WhiteButton.module.css'

const WhiteButton = (props) => {
  const {txt, count, ...restProps} = props
  
  return (
    <div className={css.btn} {...restProps} >{txt} <span className={css.count}>({count})</span></div>
  )
}

export default WhiteButton