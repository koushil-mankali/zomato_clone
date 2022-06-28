import React from 'react'

import css from './WhiteButton.module.css'

const WhiteButton = ({txt, count}) => {
  return (
    <div className={css.btn}>{txt} <span className={css.count}>({count})</span></div>
  )
}

export default WhiteButton