import React from 'react'

import css from './RedBtnHov.module.css'

const RedBtnHov = ({txt}) => {
  return (
    <div className={css.btn}>{txt}</div>
  )
}

export default RedBtnHov