import React from 'react'

import css from './WhiteBtnHov.module.css'

const WhiteBtnHov = ({txt}) => {
  return (
    <div className={css.btn}>{txt}</div>
  )
}

export default WhiteBtnHov